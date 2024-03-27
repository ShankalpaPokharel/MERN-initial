import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin:process.env.,
}))

app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({extended:true,limit:"16k"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}