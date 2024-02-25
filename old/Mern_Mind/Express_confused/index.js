const express = require('express')
const app = express()


// Using Node.js `require()`
const mongoose = require('mongoose');

app.use(express.json())

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
    Book.find({}).then((data)=>{
        console.log(data);
        res.send(data)
    })
    // res.send("list of todods")
})

app.post("/api/books",async(req,res)=>{
    let {title,isbn}=req.body;
    let book = await Book.create({title,isbn})
    res.send(book)
})

app.listen(8000,()=>{
    console.log("server started")
})


app.put("/api/books/:_id",async(req,res)=>{
    try{
        let id = req.params._id
        let book = await Book.findByIdAndUpdate(id,{title:"ruby & rails",isbn:111},{new:true})
        res.send(book)
    }
    catch(err){
        res.status(500).send({
            msg:"Server error"
        })
    }
})



