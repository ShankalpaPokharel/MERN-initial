const express = require("express")
const db = require('./config/db')
const userRoutes = require('./routes/userRoutes')

// const userRoutes = require('')

const app = express();
const PORT = process.env.PORT || 5500;

// to access the data of post request
app.use(express.json()) // this is middleware


app.use('/api/users',userRoutes) //it means if any request come from api/users use this userRoutes



/*
Error handling part
*/

// Error-handling middleware for 404 errors (add before general error handler) : speiclly for page not found
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not found' });
  });


// Error-handling middleware (add at the end) : to handle the error from existing direcotry where mention next(error)
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message,errorr:err });
  });


app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
})

