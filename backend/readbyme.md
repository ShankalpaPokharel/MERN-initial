Data  File   ThirdParty(API)

## File Structure

src : incex(entry point,DB connect) APP(config,cookie,urlencode) constants (enum,DB-name)

* -> DB
* -> Models
* -> Controllers
* ->Routes
* -> Midddlewares
* -> Utils
* -> More(depend)

## Process
```(base) shankalpapokharel@MacBook-Air datamodeling % npm init``` : it create package json

add start in script

```js
"scripts": {
    "start":"node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## Data modellling

What are going to store
what kind of data we are going to data, 
like fild,  type of data

[Eraser.io](https://app.eraser.io/dashboard/all)


![alt text](<image/Screenshot 2024-03-26 at 11.10.55 AM.png>)


```const Animal = mongoose.model('Animal', animalSchema)``` : Animal is table name but it database we see as ```animals```. ```mongoose.model``` take two paramerter  first one is table name of database, and second is schema for that table. 

### before making the database
1. what are the field they are independent
2. what are the field they are dependent on one 
2. what are the field they are dependent on 2,3...

```js
import mongoose from "mongoose"

//for order items
const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED",'DELIVERED'],
        default:"PENDING"
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{type:Number,required:true},
    customer:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    orderItems:{
        type:[orderItemSchema]
    }
    // orderItems:[{productid:{..},quatity:{...}}] i could done but introduce different secnerio

},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)
```

## Start with Project

[git ignore generator](https://mrkandreev.name/snippets/gitignore-generator/#Node)

![alt text](<image/Screenshot 2024-03-26 at 7.10.36 PM.png>)

[prettier](https://www.npmjs.com/package/prettier)


npm i prettier

.prettierrc : file to settings of prettier
.prettierignore: to ingnore file by prettier

![alt text](<image/Screenshot 2024-03-26 at 7.27.07 PM.png>)


[Dotenv](https://www.npmjs.com/package/dotenv)

## Database Connection

```npm i mongoose express dotenv```

use try catch ,async and  await


cors
cookie parser
Node error

Status code


mongoose-aggregate-paginate-v2
https://www.npmjs.com/package/mongoose-aggregate-paginate-v2


npm bcrypt 
npm jwt

pre , post middleware hook 

jwt-bearrer token


npm install cloudinary

npm i multer



## HTTP
hpyer text transfer Protocal



access Token : you can access the resourse if you have 
refresh token : save in database, also give to user, user don't need to login everytime, hit the endpoint ,  will give new access token

 user.save({validateBeforeSave:false})



write a artical about difference between access and refresh token : hashnote

getUserChannelProfile artical aggriatcal pipleline

left join in database


```js

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
```


```Date.now()+Math.random().toString(36).substring(2,10)```
* Date.now(): Gets the current timestamp in milliseconds.
* .toString(36): Converts the timestamp to a base 36 string.
* .substring(2,10): Extracts a portion of the string, starting from the 3rd character up to the 10th character.


```localhost:8888/api/products?search=p3```

```
const product = await Products.find({
    title:new RegExp(req.query.search,"i")
    })
```

### multer

### cloudnary

### need to install dot env to use .env file

### to remove file: 
```
fs.unlinkSync(localFilePath)
```

### password hide when fetctching the user data
```select:flase```
```
password: { type: String, required: true,select:false },
```
to  use it

```
let user = await User.findOne({ email: req.body.email }).select('+password');
```