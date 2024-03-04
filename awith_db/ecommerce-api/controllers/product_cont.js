const Products = require('../models/product')
const User = require('../models/User')

const Joi = require('joi')
const handleServerError = require('../middleware/handleServerError')

const productSchema = Joi.object({
    title: Joi.string().max(30).required(),
    price:Joi.number().min(0).max(1000000),
})




exports.fetchProduct = async(req,res,next)=>{
    const product = await Products.find()
    // .populate('createdBy');
    res.status(200).json(product)
}


exports.storeProduct = async(req,res,next)=>{

    try{
        const value = await productSchema.validateAsync(req.body,{abortEarly:false})
    }catch(err){
    //    return res.send(err)
        return res.send({
            message:"Validation Error",
            error:err.details.map(er =>{
                return {field:er.context.key,
                        message:er.message}
            })
        })
    }

    try{
        const product = await Products.create({...req.body,createdBy:req.user._id})
        return res.status(200).send(product)
    }
    catch(error){
        next(error)
    }
}

exports.updateProduct = async(req,res,next)=>{
    try{
        const value=await productSchema.validateAsync(req.body,{abortEarly:false})
    }catch(err){
        console.log("entered in update product joi validation catch")
        // handleServerError.joiCatch(err)
        next(err)
    }

    // const porduct_id = req.params.id;
    // const {title,price} = req.body;
   
}
exports.deleteProduct = async(req,res,next)=>{
    const porduct_id = req.params.id;
    const {title,price} = req.body;
   
}