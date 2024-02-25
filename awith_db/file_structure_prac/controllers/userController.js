const User = require("../models/User")

exports.getAllUsers = async(req,res,next)=>{
try{
    const users = await User.find();
    // const users = [{name:"hari",age:30},{name:"ram",age:45}]
    res.status(200).json(users);
}
catch(error){
    next(error)
}
}

exports.createUser = async(req,res,next) =>{
    const {name,email,age} = req.body
    try{
        const data = await User.create({name,email,age})
        res.status(200).json(data)
    }
    catch(error){
        next(error)
    }
    
}

exports.getUserById = async(req,res,next)=>{
    try{
        const user = await User.findById(req.params.id);
        console.log(user)
        if (!user){
            res.status(400).json({message:"user not found"})
        }
        res.status(200).json(user)
    }
    catch(error){
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid user ID format" });
        }
        next(error);
    }
}

exports.updateUser = async(req,res,next)=>{
    const {name,email,age} = req.body;
    try{
        const user = await User.findByIdAndUpdate(req.params.id,{name,email,age})
        console.log(user)
        if(!user){
            return res.status(400).json({message: "user not found"})
        }
        return res.json(user)
    }
    catch(error){
        next(error)
    }
}

exports.deleteUser = async(req,res,next)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        console.log({user})
        if (!user){
            return res.status(400).json({message:"User doesn't exist"})
        }
        return res.status(200).send({message:"Successfully deleted"})
    }
    catch(error){
        next(error)
    }
}

