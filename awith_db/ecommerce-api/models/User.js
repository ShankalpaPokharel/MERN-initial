const mongoose = require("mongoose");

const UserSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // validate:{
        //     validator:async(value) =>{
        //         return /^[a-zA-Z]+$/.test(value);
        //     },
        //     message: props => `${props.value} must contain only alphabetic characters!`
        // }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: async (value) => {
                let matched = await mongoose.models.User.findOne({
                    email: value,
                });
                if (matched) {
                    return false;
                }
            },
            message: "email already used db",
        },
    },
    password: { type: String, required: true },
    phone: { type: Number },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        required: true,
        message: "{VALUE} is not supported",
    },
});

module.exports = mongoose.model("User", UserSchma);




/*
const mongoose = require('mongoose');

// Custom validator function for alphabetic characters
const nameAlphabeticValidator = function(value) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(value);
};

// Custom validator function for name length
const nameLengthValidator = function(value) {
    return value.length >= 3 && value.length <= 15;
};

// Define your schema
const YourSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: [
            {
                validator: nameAlphabeticValidator,
                message: 'Name must contain only alphabetic characters!'
            },
            {
                validator: nameLengthValidator,
                message: 'Name length must be between 3 and 15 characters!'
            }
        ]
    }
});

// Compile the schema into a model
const YourModel = mongoose.model('YourModel', YourSchema);

*/