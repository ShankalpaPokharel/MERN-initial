const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const BookSchema = new mongoose.Schema({
  title: String,
  isbn: Number,
  author:{
    type:ObjecId,
    ref:"Author",
    reqired:true
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book
