const mongoose = require("mongoose")

const UserSchma = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:Number}
})


module.exports = mongoose.model("Users",UserSchma)