const mongoose = require("mongoose")

const ProductSchma = new mongoose.Schema({
    title:{type:String,require:true},
    price:{type:String,require:true},
    createdBy:{type:String,require:true}
})


module.exports = mongoose.model("Products",ProductSchma)