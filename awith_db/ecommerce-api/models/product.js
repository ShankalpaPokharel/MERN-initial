const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchma = new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:String,default:0},
    createdBy:{type:ObjectId,ref:"User", required:true}
})


module.exports = mongoose.model("Products",ProductSchma)