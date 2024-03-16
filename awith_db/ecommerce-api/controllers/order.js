const Order = require("../models/Order");
const Product = require('../models/product')

exports.createOrder = async (req, res) => {
    try {
        const createdBy = req.user._id;
        const productss = req.body;
        
        const allProduct = []
        let subTotal=0;
        for (let i in productss.products){
            let prod= productss.products[i]
            const idd = prod._id;
            const product=await Product.findById(prod._id)
            const rate = product.price
            const title = product.title;
            const quantity = prod.quantity
            const total = rate*prod.quantity;
            subTotal +=total;
            allProduct.push({idd,rate,title,quantity,total})
        }
        const createdProduct = await Order.create({products:allProduct,subTotal:subTotal,createdBy:createdBy});
        console.log( "createdProduct",createdProduct)

    } catch (err) {
        console.log(err.stack)
        res.send(err.stack);
    }
};
