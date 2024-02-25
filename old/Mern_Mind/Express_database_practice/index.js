const express = require("express")
const app = express()



app.get("/",(req,res)=>{
    console.log("get requext")
    res.send("haai")
})

app.listen(6000,()=>{
    console.log("I am listenin from port 6000")
})