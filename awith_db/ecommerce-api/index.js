const express =require("express")
const app = express()

const fileUpload = require("express-fileupload")

const db = require('./config/dbConnection')



const productRoute = require('./routes/productsRoute')
const authRoute = require('./routes/auth')
const orderRoute = require('./routes/order')
const {handleServerError,pageNotFound} = require("./middleware/handleServerError")

app.use(fileUpload())
// server static file or resources
app.use('/uploads',express.static('./uploads'))

app.use(express.json())
app.use('/api/products',productRoute)
app.use('/api/auth',authRoute)
app.use('/api/order',orderRoute)
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



/*
const multer  = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'./uploads')
    },
    filename:function(req,file,cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({storage})

app.post("/api/uploadimg",upload.single("img"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
})
*/