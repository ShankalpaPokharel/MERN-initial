
const jwt = require("jsonwebtoken")

exports.checkAuthentication = (req,res,next)=>{
    console.log("enter in check authentication")
    let token = req.headers.authorization?.replaceAll("Bearer ", "");

    if(token){
        try{
            const decodedUser=jwt.verify(token,"shhhhh")
            console.log(decodedUser)
            req.user = decodedUser;
            return next()
        }catch(err){

        }
    }
    return res.status(401).send({
        msg:"unauthenticated"
    });    
}

exports.checkSeller = (req,res,next)=>{
   
    if(req.user.role=="seller"){
        return next()
    }
    return res.status(403).send("Unauthorize access")
}
exports.checkBuyer = (req,res,next)=>{
   
    if(req.user.role=="buyer"){
        return next()
    }
    return res.status(403).send("Unauthorize access")
}


