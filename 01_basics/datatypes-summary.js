// Primitive (call by value)

// 7 types  : String ,Number, Boolean, null, undefined, Symbol, BigInt(to store large number like scientific number)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigumber = 12345678901234567893456n//BigInt syntax just put "n" in the last of the number



// Reference (Non Premitive)

// Array, objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myobj = {
    name: "Anant",
    age: 21,
}

const myFunction = function(){
    console.log("hello world");
}
// console.log(typeof bigumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);