const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/eLibrary').then(()=>{
    console.log("Database succssfully connected")}).catch((error)=>{
        console.log(`Database couldn't connect and error ${error}`)
    })
