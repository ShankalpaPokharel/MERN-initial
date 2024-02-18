const express = require('express')
const app = express()
const auth = require("./auth")
// list destructuring concept
const {checkAuthetication,checkValidRole} = require("./middleware/auth_mid")

let todo = ["html","css"]

// auth.signup("shankalpa",'abc@gmail.com','password')
// auth.login('abc@gmail.com','password')


app.use(express.json());

app.get('/',(req,res)=>{
    console.log("landing page")
    res.send("Welcome to Home page")
})

// get request
app.get('/api/todos',(req,res)=>{
    console.log("get api todos")
    res.status(200).send(todo);
})

// post request to send item
app.post('/api/todos',checkAuthetication,checkValidRole,(req,res)=>{
    console.log("post api todos")
    const title = req.body.title
    if (title === ""){
        return res.status(400).send("Title field is require")
    }
    else if(todo.includes(title)){
        return res.status(400).send("Title is already exist")
    }
    else{
        todo.push(title);
        return res.send("Update todos"+todo)
    }
})

app.delete('/api/todos/reset',checkAuthetication,checkValidRole,(req,res)=>{
    todo=[]
    return res.send(todo)
})




// listening port
app.listen(8000,()=>{
    console.log("I am listening")
})

/*
const arrays = ['a','b','c']
// const item='b'

if (arrays.includes('B')){
    console.log("item in arrays")
}
else{
    console.log("item doesn't exist in array")
}
*/







