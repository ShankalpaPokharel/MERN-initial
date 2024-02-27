const express =require("express")
const app = express()
const db = require('./config/dbConnection')
const authRoute = require('./routes/authentication')



const PORT = 7777;
app.use(express.json())

app.use('/api/auth',authRoute)




app.use((req,res,next)=>{
    res.status(404).json({message: "direcotry not found"})
})

app.use((err,req,res,next)=>{
    res.json({errorMessage:err.message,error:err})
})






app.listen(PORT,()=>{
    console.log(`I am listening form ${PORT}`)
})