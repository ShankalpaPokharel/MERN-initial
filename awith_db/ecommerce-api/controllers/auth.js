const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Joi = require("joi");
var jwt = require('jsonwebtoken');

exports.getAllUser = async(req,res)=>{
    res.send(await User.find())
}

const signupValidationSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    password: Joi.string()
        .min(8)
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    // role:Joi.string().valid('buyer',"seller").required()
});

exports.signup = async (req, res, next) => {
    try {
        const value = await signupValidationSchema.validateAsync(req.body, {
            allowUnknown: true,
            abortEarly: false,
        });
    } catch (err) {
        return res.status(400).send({
            msg: "validationerror",
            error: err.details.map((el) => {
                return {
                    field: el.context.key,
                    msg: el.message,
                };
            }),
        });
    }

    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).send({
            msg: "validation Error",
            errors: [{ field: "email", msg: "already used" }],
        });
    }

    try {
        let hashed = await bcrypt.hash(req.body.password, 10);
        let user = await User.create({ ...req.body, password: hashed });

        user.password = undefined;
        // or
        // user = user.toObject()
        // delete user.password
        res.send(user);
    } catch (error) {
        // if (error.name === 'MongoError' && error.code === 11000 && error.keyPattern.email) {
        //     // Duplicate email error
        //     return res.status(400).json({ message: 'Email already exists.' });
        // }
        // console.log("error catch");
        next(error);
    }
};


const loginValidationSchema = Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
    password: Joi.string()
        .min(8)
        .required(),
})


exports.login = async(req, res, next) => {
    try{
        const value = await loginValidationSchema.validateAsync(req.body,{
            allowUnkown:true,
            abortEarly:false,
        })
    }
    catch(err){
        // return res.send(err)
        return res.send({
            message:"Validation Error",
            error: err.details.map(er=>{
                return{
                field:er.context.key,
                message:er.message}
            })
        })
    }


    try {
        let { email, password } = req.body;

        let user = await User.findOne({ email }).select('+password');

        if (user) {
            const comp = await bcrypt.compare(password, user.password);
            if (comp) {
                user = user.toObject();
                user.password = undefined;
                const token = jwt.sign(user, 'shhhhh');
                return res.send({token});
            } else {
                return res.status(401).send({msg:"Invalid Credentials"});
            }
        } else {
            return res.status(401).send({msg:"Invalid Credentials"});
        }
    } catch (err) {
        next(err);
    }
};

