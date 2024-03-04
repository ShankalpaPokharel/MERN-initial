const mongoose = require("mongoose")

const UserSchma = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:Number},
    role:{type:String,enum:["buyer","seller"],required:true,message: '{VALUE} is not supported'}
})


module.exports = mongoose.model("User",UserSchma)