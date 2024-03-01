const Products = require('../models/product')

exports.fetchProduct = async(req,res,next)=>{
    const product = await Products.find()
    res.status(200).json(product)
}



exports.storeProduct = async(req,res,next)=>{
    try{
        const product = await Products.create(req.body)
        return res.status(200).send(product)
    }
    catch(error){
        next(error)
    }
}

exports.updateProduct = async(req,res,next)=>{
    const porduct_id = req.params.id;
    const {title,price} = req.body;
   
}
exports.deleteProduct = async(req,res,next)=>{
    const porduct_id = req.params.id;
    const {title,price} = req.body;
   
}