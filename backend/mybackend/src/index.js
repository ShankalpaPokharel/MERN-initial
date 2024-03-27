
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!!",err);
})



// Start the server
// const PORT = process.env.PORT || 3000; // If PORT is not set, default to 3000
// app.listen(PORT, () => {
//     console.log(process.env.MONGODB_URI)
//     console.log(`Server is running on port ${PORT}`);
// });






/*
import express from "express"
const app = express()

;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERRR",error)
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
       })
       
    } catch (error) {
        console.error("ERROW",error)
    }
})()

*/