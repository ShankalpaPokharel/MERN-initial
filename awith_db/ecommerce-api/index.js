const express =require("express")
const app = express()

const fileUpload = require("express-fileupload")

const db = require('./config/dbConnection')

const productRoute = require('./routes/productsRoute')
const authRoute = require('./routes/auth')
const {handleServerError,pageNotFound} = require("./middleware/handleServerError")



app.use(express.json())
app.use('/api/products',productRoute)
app.use('/api/auth',authRoute)
app.use(handleServerError)
app.use(pageNotFound)
app.use(fileUpload)

app.listen(8888,()=>{
    console.log("server started.")
})