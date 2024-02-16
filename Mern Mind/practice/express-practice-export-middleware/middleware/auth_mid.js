const loggedIn = true;
const validUser = true;

function checkAuthetication(req,res,next){
    if(!loggedIn){
        return res.status(400).send("Hey, You are not logged in")
    }
    console.log("Logged in")
    return next()
}

function checkValidRole(req,res,next){
    if(!validUser){
        return res.status(400).send("Hey, you are not valid user")
    }
    console.log("Valid User")
    next()
}


// app.use(checkAuthetication,checkValidRole)
module.exports={
    checkAuthetication,checkValidRole
}