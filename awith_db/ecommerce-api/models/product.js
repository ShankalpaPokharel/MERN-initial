const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchma = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required:true,
        // validate: {
        //     validator: async function(value){
        //         if (value===" "){
        //             this.price=0;
        //         }
        //         return true
        //     },
        //     message: "",
        // },
             },
    createdBy: { type: ObjectId, ref: "User", required: true },
    image:{
        type: String,
    }
});

module.exports = mongoose.model("Products", ProductSchma);
