const express = require('express')
const app = express()


// Using Node.js `require()`
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bookStore')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookSchema = new Schema({
  title: String,
  isbn:Number,
  
});

const Book = mongoose.model("Book",BookSchema) //write book in capital latter

app.get('/api/books',(req,res)=>{
    Book.find().then((data)=>{
        console.log(data);
        res.send(data)
    })
    res.send("list of todods")
})

app.post("/api/books",(req,res)=>{
    Book.create({title:"js",isbn:333}).then((book)={
        res.send(book)
    })
})

app.listen(8000,()=>{
    console.log("server started")
})

