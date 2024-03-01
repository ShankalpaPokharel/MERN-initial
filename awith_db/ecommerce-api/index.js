const express =require("express")
const app = express()
const db = require('./config/dbConnection')
const productRoute = require('./routes/productsRoute')
const authRoute = require('./routes/auth')

app.use(express.json())

app.use('/api/products',productRoute)

app.use('/api/auth',authRoute)

app.use((error, req,res,next)=>{
    res.status(400).json(error);
})



app.listen(8888,()=>{
    console.log("server started.")
})