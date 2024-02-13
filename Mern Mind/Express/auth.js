const bcrypt = require("bcrypt")

function oldsignup(username,email,password){
    bcrypt.hash(password, 10, function(err, hash) {
        // console.log({hash})
        let data = {
            "username":username,
            email,
            password:hash,
        }
        console.log(data)
    })
    
}

function oldlogin(username,email,password){
    let dbstorepassword = '$2b$10$yXji2ay.q91BJQW6gGQVpeG3ttKHJpFjow/78IuEVf1IPS0A.dZdi'
    bcrypt.compare(password, dbstorepassword, function(err, result) {
        if(result){
            console.log("login successful")
        }
        else{
            console.log("login inavalid")
        }
    });}


const login =()=>{
    console.log("login")
}
const signup =()=>{
    console.log("signup")
}



// default export- only one default export per module(per js page) we can rename when import. this page export the function
// module.exports =signup


// Named export : it export the object
module.exports = {
    "login":login,
    "signup": signup,
}