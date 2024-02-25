const express = require('express')
/*
express package --> express() function --> get (have object(funciton))

*/

const app = express()

app.listen(3000,()=>{
    console.log("server started")
})



app.get('/',(req,res)=>{
    res.send("hello world")
})
//req - request from browser
//res - response to frontend
//order will matter so req than res
app.get('/api/todos',(req,res)=>{
    console.log("send todos")
    let todos = ["html","css","js"]
    res.send(todos)
}) 
const funtest =(req,res) =>{
    console.log("custom function working")
    res.send("Custom funtion wroking ..")
}
app.get('/ftest',funtest)



app.post('/api/todos',(req,res)=>{
    // console.log(req)
    res.send("Post request is working")
})








