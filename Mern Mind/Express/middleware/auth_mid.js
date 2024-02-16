let loggedIn = true;
function checkAuthentication(req,res,next){
    console.log("checkAuthentication")
    // res.status(401).send()
    if(!loggedIn){
        return res.status(401).send()
    }
    next()
}

module.exports = checkAuthentication;