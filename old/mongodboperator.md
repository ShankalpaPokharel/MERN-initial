
use mydatabase

db.users.insertMany([
  { name: "Jony", age: 32, city: "New York", hobbies: ["Reading", "Hiking" ] },
  { name: "Ace", age: 26, city: "Los Angeles", hobbies: ["Painting","Gardening"] },
  { name: "Boby", age: 35, city: "Chicago", hobbies: [ "Painting","Photography"] }
])


# Query Operators: 

## Comparison Operator

1. Greater Than($gt)

db.users.find({age:{$gt:25}})

db.users.find({age:{$lt:30}})

db.users.find({age:{$gte:25}})
db.users.find({age:{$lte:25}})

db.user.find({age:{$eq:25}})



## 