import express from "express"; //moduel js
const app = express()

// app.get('/',(req,res) =>{
//     res.send("Server is ready")
// })

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Introduction",
          content: "Welcome to our website! Why did the web developer stay in bed? Because he didn't want to get up in the CSS!"
        },
        {
          id: 2,
          title: "News Update",
          content: "Breaking news: New discovery in space! Turns out, aliens prefer JavaScript over Java."
        },
        {
          id: 3,
          title: "Recipe",
          content: "Try our delicious chocolate chip cookies. They're so good, they'll make you forget about semicolons!"
        },
        {
          id: 4,
          title: "Product Sale",
          content: "50% off on all electronics this weekend. Don't worry, our servers won't crash like your code!"
        },
        {
          id: 5,
          title: "Event Reminder",
          content: "Don't forget the concert tomorrow night! The lead singer's favorite language? Python!"
        }
      ];
      res.send(jokes)

})


const port = process.env.PORT || 3000; // in production grade port must take from env. but if it doesn't found in run at port 3000

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
})
