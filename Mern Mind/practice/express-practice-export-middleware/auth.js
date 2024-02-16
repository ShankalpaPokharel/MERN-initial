const bcrypt = require("bcrypt")
const express = require("express")


const userdata = {
    name:"",
    email:"",
    password:""
}

function signup(name,email,password){

    bcrypt.hash(password, 10, function(err, hash) {
        userdata.name=name;
        userdata.email=email;
        userdata.password = hash;
        console.log("I got this",userdata)
    });
    
    }
    
function login(email,password){
    console.log("User data", userdata)
    console.log("data are", password,userdata.password, email)
    bcrypt.compare(password, '$2b$10$mVSjcJ28kK9oGTcbfZv4D.odZVay3LftRvsSuCsFQbnltj3t.YrG6', function(err, result) {
        if(result){
            console.log("You logged in")
        }
        else{
            console.log("wrong password")
        }
    });
   
}


module.exports={
    login:login,
    signup:signup
}

