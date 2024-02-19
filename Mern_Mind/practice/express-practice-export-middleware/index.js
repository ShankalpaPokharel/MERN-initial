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
// app.get('/api/todos',(req,res)=>{
//     console.log("get api todos")
//     res.status(200).send(todo);
// })

// post request to send item
// app.post('/api/todos',checkAuthetication,checkValidRole,(req,res)=>{
//     console.log("post api todos")
//     const title = req.body.title
//     if (title === ""){
//         return res.status(400).send("Title field is require")
//     }
//     else if(todo.includes(title)){
//         return res.status(400).send("Title is already exist")
//     }
//     else{
//         todo.push(title);
//         return res.send("Update todos"+todo)
//     }
// })

// app.delete('/api/todos/reset',checkAuthetication,checkValidRole,(req,res)=>{
//     todo=[]
//     return res.send(todo)
// })


// listening port
app.listen(8000,()=>{
    console.log("I am listening")
})

let todos = [
    // {
    //     id:1,
    //     title:"html",
    //     statuss:false
    // },
    // {
    //     id:2,
    //     title:"css",
    //     statuss:false
    // }
]

app.get('/api/todos',(req,res)=>{
    console.log("get api todos")
    res.status(200).send(todos);
})

let id_no = 2
app.post('/api/todos', (req,res)=>{
    // removing the whiteshpace of input 
    let new_title = req.body.title?.trim()
    console.log("I got this",new_title)
    if(!new_title){
        return res.status(400).send("Empty field")
    }

    
    // check input item has already present or not 
    if(todos.some(item=>item.title == new_title)){
      return res.status(400).send("Title already exist")  
    }
    // adding new item in list as a object form
    else{
        let newItem = {id:id_no+1,
                title:req.body.title,
                statuss: false}
        todos.push(newItem)
        id_no++;
        res.status(200).send(todos)
    }
    
})


app.put('/api/todos/:id',(req,res)=>{

    let title = req.body.title;
    let statuss = req.body.statuss;
    let input_id = req.params.id;
    console.log(title,statuss, input_id)
    for (let i=0;i<todos.length;i++){
        // update base on id 
        if(todos[i].id == input_id){
            // todos[i].title=title;
            todos[i].statuss=statuss;
            return res.status(200).send(todos)
        }  
    }
    return res.status(400).send("Bad request")
    
    
})

app.delete('/api/todos/:id',(req,res)=>{
    console.log("id for delete",req.params.id)
    let input_id = req.params.id;
    if (todos.length==0){
        return res.status(500).send("internal Server Error: Todo list is not found")
    }
    let todos_length = todos.length
    // filter doesn't update so we assigen filter item in old filter variable 
    todos = todos.filter(todo => todo.id != input_id)
    if(todos_length != todos.length){
    return res.status(200).send(todos)
    }
    else{
        return res.status(400).send("Requested specific id is not found")
    }
})






