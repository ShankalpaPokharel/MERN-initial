// object 


// const objsample = {
//     fname: "shankalpa",
//     lname: "pokharel",
//     age: 34,
//     fullName: function (){
//         return this.fname+" "+this.lname;
//     }
// }
// console.log(objsample)
// console.log(objsample.fullName())


// string 
// let test = 'abcdefghijKLMNopqrstuvwxyx'
// console.log(test.length)
// console.log(test.toLowerCase())
// console.log(test.toUpperCase())
// console.log(test.charAt(0).toUpperCase())
// console.log(test[5])


//variable substitutino in text
// let name = "Shankalpa"
// let lname = "Pokharel"
// let age = 45

// console.log(`My name is ${name} ${lname}. I am ${age} years old.`)


// const list = ['ab','cd','ef','gh']
// console.log(list.length)

// if(list.includes('ab')){
//     console.log("ab present")
// }
// else{
//     console.log("Item doesn't exist in list")
// }


// Map 
// const ages = [3,4,5,6,7]

// const ag = ages.map(myfunction)
// function myfunction(num){
//     return num*10;
// }
// console.log(ag)

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];


// const perso = persons.map(item=>{
//     return item.firstname + item.lastname
// })

// console.log(perso)


//map with id 
// const fruits = ['apple','banana','mango','orange']

// const items = fruits.map((item,index)=>{
//     console.log(item,index)
// })

async function printing() {
    for (let i =0;i<1000;i++){
        console.log(i);
    }
}
function abc(){
    for (let i = 97; i <= 122; i++) {
        // Convert ASCII value to corresponding character and print
        console.log(String.fromCharCode(i));
    }}
console.log("hi")
printing()
abc()