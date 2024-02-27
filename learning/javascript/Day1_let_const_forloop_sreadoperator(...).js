/*
Use const when you don't plan to reassign the entire array or object.
Use let when you need the flexibility to reassign the entire array or object.
 attempting to reassign a new value to daysInWeek will result in a syntax error.

 const daysInWeek = 7;
daysInWeek = 8; // This will result in an error, as you can't reassign a value to a const variable


However, if the value itself is mutable, such as an object or an array, you can modify its properties or elements even though it's assigned to a const variable:
const person = { name: 'John', age: 30 };
person.age = 31; // This is allowed because we're not changing the reference to the object, just modifying one of its properties

const numbers = [1, 2, 3];
numbers.push(4); // This is allowed because we're not changing the reference to the array, just modifying its contents

*/


for (let i = 0; i<10;i++){
    console.log(i)
}

const arr = ["ag","og","sunoji"]

for (let i in arr){
    console.log(arr[i])
}

// for in
 const arra = {fname:"John", lname:"Doe", age:25};
 for (let i in arra){
    console.log(arra.fname)
}

// for of
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
 const arraa = ["ag","og","sunoji"]
 for (let i of arraa){
    console.log(i)
}

// spread operator

let arry = ["ag","og","sunoji"]

arry = [...arr,"manamoji"]

console.log(arry)
