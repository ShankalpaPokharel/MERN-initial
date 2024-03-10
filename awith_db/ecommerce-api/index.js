const express =require("express")
const app = express()

const fileUpload = require("express-fileupload")

const db = require('./config/dbConnection')

const productRoute = require('./routes/productsRoute')
const authRoute = require('./routes/auth')
const {handleServerError,pageNotFound} = require("./middleware/handleServerError")

app.use(fileUpload())
app.use('/uploads',express.static('uploads'))

app.use(express.json())
app.use('/api/products',productRoute)
app.use('/api/auth',authRoute)
app.use(handleServerError)
app.use(pageNotFound)



app.listen(8888,()=>{
    console.log("server started.")
})














// const path = require("path");
// // console.log(path.resolve())

// // let uniqueTimestamp = Date.now() +Math.random().toString(36).substring(2, 10)
// // console.log(uniqueTimestamp)

// let rootPath = path.resolve();
// let uniqueTimestap = "21423441234123";



