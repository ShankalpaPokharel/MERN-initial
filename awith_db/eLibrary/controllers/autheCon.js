const User = require('../models/UserInfo')
const bcrypt = require('bcrypt')
const saltRounds = 10;


exports.signUp=async(req,res,next)=>{
    try{
        const {name,email,password} = req.body;
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            if(err){
                res.send("unable to hash")
            }
            console.log(name,email,hash)
            const saveInfo = await User.create({name,email,password:hash})
            return res.status(200).json({saveInfo})
            // console.log("Hi I am sign up")
        });
        
        
    }catch(error){
        next(error);
    }
}
