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
