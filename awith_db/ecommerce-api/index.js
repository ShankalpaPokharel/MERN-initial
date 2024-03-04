const express =require("express")
const app = express()

const db = require('./config/dbConnection')

const productRoute = require('./routes/productsRoute')
const authRoute = require('./routes/auth')
const {handleServerError} = require("./middleware/handleServerError")


app.use(express.json())
app.use('/api/products',productRoute)
app.use('/api/auth',authRoute)
app.use(handleServerError)


app.listen(8888,()=>{
    console.log("server started.")
})