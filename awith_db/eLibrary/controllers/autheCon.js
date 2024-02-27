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

exports.login = async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        // console.log(email,password)
        const userdata = await User.findOne({email:email})
        const hash = userdata.password
        // console.log(hash)
        bcrypt.compare(password, hash, async function(err, result) {
            if(err){
                return res.status(400).json({message:"hash problem"})
            }
            if (!result){
                return res.status(400).json({message:"password didn't match"})
            }
            return res.status(200).json({message:"successfully logged in"})
        });
    }
    catch(err){
        next(err)
    }
}

// add email varification or not 