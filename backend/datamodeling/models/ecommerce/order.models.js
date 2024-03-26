import mongoose from "mongoose"

//for order items
const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED",'DELIVERED'],
        default:"PENDING"
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{type:Number,required:true},
    customer:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    orderItems:{
        type:[orderItemSchema]
    }
    // orderItems:[{productid:{..},quatity:{...}}] i could done but introduce different secnerio

},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)