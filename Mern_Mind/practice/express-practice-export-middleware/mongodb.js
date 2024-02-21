
use bookStore // enter in database if present, if not , it creates and enter

db.createCollection("books")

db.books.insertOne({name:'python',isbn:213123})
db.books.insertMany([{name:'python',isbn:213123},{name:'java',isbn:213124}])
db.books.find()

db.books.insertOne({name:'ruby',isbn:213123, publishedDate:"2023-01-01"})


db.books.find({name:"rubby"})


db.books.updateOne({name:"ruby"},{$set:{name:"ruby and rails"}})




//another
use blog
db.createCollection("posts")

db.posts.insertOne({
    title:"Post Title 1",
    body:"Body of post",
    category:"News",
    likes:1,
    tags:["news","events"],
    date:Date()
})
db.posts.insertMany([  
    {
      title: "Post Title 2",
      body: "Body of post.",
      category: "Event",
      likes: 2,
      tags: ["news", "events"],
      date: Date()
    },
    {
      title: "Post Title 3",
      body: "Body of post.",
      category: "Technology",
      likes: 3,
      tags: ["news", "events"],
      date: Date()
    },
    {
      title: "Post Title 4",
      body: "Body of post.",
      category: "Event",
      likes: 4,
      tags: ["news", "events"],
      date: Date()
    }
  ])

  db.posts.find( {category: "News"} ) //it gives the data of category of news

  db.posts.find({}, {title: 1, date: 1}) //it gives the all data but title and date only will be in the field

  db.posts.find({}, {_id: 0, title: 1, date: 1}) //use 1 to include the field and 0 to exclude the field it don't show id 

  db.posts.find({}, {category: 0}) //it exclude the category field and show remaming field
  b.books.find({_id:ObjectId("65d5c0d28a7011e9fea97b9d")})
  /*
We can't use 0 and 1 in the same object field. only exception is the id field. we should either specify the fields we would like to include or the fields we would like to exclude. this example show the error
*/
db.post.find({},{title:1,date :0}) // this show the error 


//Update

db.posts.updateOne({title:"Post Title 1"},{$set:{likes:2,}})

db.posts.updateOne({title:"Post Title 1"},{$set:{likes:2,category:"test"}})

db.posts.updateOne({title:"Post Title 1"},{$set:{category:["News","test"]}})

//Insert if not found : upsert 

db.posts.updateOne({title:"Post Title 5"},{$set:{
    title:"Post Title 5",
    body:"Body of post.",
    category:"Event",
    likes:5,
    tags:["news","event"],
    date: Date()
}},{upsert:true})



//Update many
db.posts.updateMany({},{$inc:{likes:1}})


// Delete 
db.posts.deleteOne({title:"Post Title 5"})

db.post.deleteMany({category:"Technlogy"}) 