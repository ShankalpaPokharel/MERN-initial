/* 
global object(many of these didn't work on browser like require, dirname,filename)
global object is that type of object which we don't need to import like require, module
- console
- __dirname: it catch Express folder
-__filename: it catch file name 
- require

Node Modules
- third party:dcrypt, axious, nodemon
- core
- local : eg const signup = require("./auth")
    - common js module(express)
    - Es module(react)

- htpp module
when install npm i bcrypt it make ndoe modules, package-lock.json, package.json
*/


const bcrypt = require('bcrypt'); //const bcrypt-it acts as a object
const path = require("path")
const http =require("http")

const createUser = require("./auth") //signup =(){} if it is default
const auth = require("./auth") // {login,signup:()=()} // if it is named export





// console.log(path.join(__dirname,"uploads"))

// http.createServer((req,res) =>{
//     // console.log("Hello")
//     console.log(req.url);
//     console.log(req.method);

//     if(req.url=="/todos" && req.method=="GET"){
//         res.write(JSON.stringify(['task1', 'task2'])); //we can't send list, so we did stringfy but it will be text format
//         res.end();
//     }
//     else if (req.url =="/login" && req.method=="POST"){
//         auth.login("ram","ram@gmail.com","password")
//         res.write("login");
//         res.end();
//     }
//     else if (req.url =="/signup" && req.method=="POST"){
//         auth.signup("ram","ram@gmail.com","password")
//         res.write("signup");
//         res.end();
//     }
    
// }).listen(8000)

   
// }
// signup("ram","ram@gmail.com","password")
// login("ram","ram@gmail.com","password")

// auth.signup()
// auth.login()

// console.log("js linked");
// console.log(__filename);
// console.log(__dirname);

// const products = require("./products")
// products.fatch()
// products.create()

const products = require("./products")

console.log(products)
products.fatch()
products.create()