const express = require("express")
const app = express()

const mongoose = require('mongoose')

const url = 'mongodb://localhost/AlienDBex'

mongoose.connect(url)
const con = mongoose.connection

con.on('open',function(){
    console.log('connected')
})

app.use(express.json())

const alienRouter = require('./router/aliens')
app.use('/aliens',alienRouter)


// app.get('/aliens',(req,res)=>{
//     res.send("hi")
// })

app.listen(9000,()=>{
    console.log("server startedd")
})