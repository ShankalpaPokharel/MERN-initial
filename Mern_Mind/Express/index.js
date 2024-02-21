
const express= require("express")

const app = express()

let todos = ["html","css"]
let loggedIn = true;

const checkAuthentication = require("./middleware/auth_mid")

/*
 middleware
    -siply a function which has access to req and res
    - next - points to the next upcomming valid middleware(function)
*/
// function checkAuthentication(req,res,next){
//     console.log("checkAuthentication")
//     // res.status(401).send()
//     if(!loggedIn){
//         return res.status(401).send()
//     }
//     next()
// }

function checkValidRole(req,res,next){
    let hasValidRole = true
    if(!hasValidRole){
        return res.status(403).send()
    }
    next()
}



app.use(checkAuthentication)  //global middle-ware
app.use(checkValidRole)

app.get("/api/todos",(req,res)=>{
    console.log("response list of todos")
    res.send(todos)
})
app.post("/api/todos",(req,res)=>{
    if (loggedIn){
        todos.push("git")
    console.log("response list of todos")
    return res.send(todos)
    }
    //to remove the error we could add else condition but best prictice is add the return in if 
    res.status(401).send({
        message:"unauthorized."
    })

})
app.delete("/api/todos/reset",(req,res)=>{
    if (loggedIn){
        todos =[]
    console.log("todo reseted")
    // return res.status(204).send()
    return res.status(204).send(todos)
    }
    //to remove the error we could add else condition but best prictice is add the return in if 
    res.status(401).send({
        message:"unauthorized."
    })

})

app.listen(8000, ()=>{
    console.log("Server started..");

})


/* 
status code
2**  : successfull 204- no content
3**: redirect 
4** : error of client
 400-bad request
 401 - unauthorized // not logged in
 ,403
 404-page not found /resourse not found
*/


let todo = [{id:1, name: "html"}, {id:2, name: "css"}];
let datas = [];

// for (let i = 0; i < todo.length; i++) {
//     datas.push(todo[i].name);
//     console.log(todo[i].name);
// }

let inputTitle = 'html'

// if(datas.includes(inputTitle)){
//     return res.status(400).send({
//         error:[{key:"title",
//         msg:"this filed is already exist"}]})
//     console.log("this is already exist")
// }

console.log(todo.some(el => el.name ==inputTitle))



// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
// import mongoose from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));

