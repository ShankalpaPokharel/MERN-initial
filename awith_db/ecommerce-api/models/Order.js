const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    products:[{
        _id:ObjectId,
        rate:{type:Number,required:true},
        title:{type:String,required:true},
        quantity:{type:Number, required:true},
        status:{type:String,enum:["pending","completed","reject"], default:"pending"},
        total:{type:Number, required:true}
    }],
    subTotal:{type:Number,required:true},
    createdBy:{type:ObjectId,required:true}
})

const Order = mongoose.model("Order",OrderSchema)

module.exports = Order;