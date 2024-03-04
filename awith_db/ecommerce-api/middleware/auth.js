
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

