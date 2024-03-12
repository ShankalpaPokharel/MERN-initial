const Products = require('../models/product')
const User = require('../models/User')

const path = require("path")

const Joi = require('joi')
const handleServerError = require('../middleware/handleServerError')

const {joiValidationUtils} = require("../utils/validationUtils")


const productSchema = Joi.object({
    title: Joi.string().max(30).required(),
    price:Joi.number().min(0).max(1000000),
})



// get all product 
exports.fetchProduct = async(req,res,next)=>{
    const product = await Products.find({
        title:new RegExp(req.query.search,"i")})
    
        // .populate('createdBy');
    if (product.length==0){
        return res.status(200).send({message:"No Product"})
    }
    res.status(200).json(product)
}






const { uploadOnCloudinary } = require('../utils/cloudinary');
// insert new product
exports.storeProduct = async(req,res,next)=>{
    console.log(path.join(path.resolve() , "uploads",req.file.filename))

    const imageUrlResponse = await uploadOnCloudinary(path.join(path.resolve() , "uploads",req.file.filename));
    console.log(imageUrlResponse)

    res.send('File uploaded successfully');


    // try{
    //     let imagePath = null;
    //     console.log(1)
    //     if(req.files?.image) {
    //         let rootPath = path.resolve()
    //         let fileName = Date.now()+Math.random().toString(36).substring(2,10);
    //         imagePath = path.join('/',"uploads",`${fileName}-${req.files.image.name}`)
    //         console.log(imagePath)
    //         req.files.image.mv(path.join(rootPath,imagePath))
    //     }
    //     console.log(2)
    //     const product = await Products.create({...req.body,createdBy:req.user._id,image:imagePath})
    //     console.log(3)
    //     return res.status(200).send(product)
    // }
    // catch(error){
    //     console.log("insert catch")
    //     next(error)
    // }
}


// update product 
exports.updateProduct = async(req,res,next)=>{
    try{
        const value=await productSchema.validateAsync(req.body,{abortEarly:false})
    }catch(err){
        console.log("entered in update product joi validation catch")
        joiValidationUtils(res,err)
    }
    
   
    try{
        const product_id = req.params.id;
        const update_data= await Products.findByIdAndUpdate(product_id,req.body,{new:true})
        console.log(update_data)
        if (!update_data){
            return res.status(400).send({"message":"invalid product"})
        }
        return res.send(update_data)
    }
    catch(err){
        next(err)
    }


}

// delete product 
exports.deleteProduct = async(req,res,next)=>{
    const product_id = req.params.id;
    try{
        const deleted_product = await Products.findByIdAndDelete(product_id)
        if(!deleted_product){
           return res.status(400).send({message:"Prodcut Not Found"})
        }
        // return res.status(204).send({message:"Successfully deleted. Deleted product:"})
        return res.status(200).send({ message: "Successfully deleted.", deleted_product });
    }
    catch(error){
        console.log("delete error",error)
        res.status(500).send({message:"internal server error"})
    }
   
}

