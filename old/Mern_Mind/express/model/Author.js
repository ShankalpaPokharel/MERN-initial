const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    constact:{type:String},
    website:{type:String}
    
})

const Author = mongoose.model("Author",AuthorSchema)
module.exports = Author