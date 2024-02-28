const Products = require('../models/product')

exports.fetchProduct = async(req,res)=>{
    const product = await Products.find()
    res.status(200).json(product)
}



exports.storeProduct = async(req,res)=>{
    try{
        const product = await Products.create(req.body)
        return res.status(200).send(product)
    }
    catch(error){
        next(error)
    }
}