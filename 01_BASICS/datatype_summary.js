// data type ko two parts me divide kiya gaya according to its memory storage and access from memory location.
//1. primitive data types
//2. no- primitive data types (reference type)

//1.bprimitive data types 

// String 

// jitne bhi primitive data types hai wo call by value hote hai..mtlb ki jab bhi aap inhe kahi se kahi copy karte hai to inka jo original data hai wo referene apko memory ka nahi diya jata ...copy karke diya jata hai...aur usme jo bhi changes karte hai wo copy me hi changes hote hai..

//Number,Boolean,null,undefined,symbol (kisi bhi value ko unique banane ke liye hum symbol ka use karte hai...in advanced java script),BigInt

//non - primitive data type (reference type)

//memory me jake direct reference allocate kiya jata hai

//Array, Objects, Functions

//js is a dynamic typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId)

const bigNumber = 89765432567898767654678n
 
// console.log(bigNumber);

//Arrays,Objects, Functions
//Arrays
const heros = ["Umesh","Ashu"]
// console.log(heros);
//Objects
let myObj = {
    name : 'UMESH',
    age: 22
}
// console.log(myObj);
//Function

const myFunction = function(){
console.log(
    "this is my function with no parameter"
);
}

// console.log(myFunction());

console.log(typeof "abc");


/*
typeOf
undefined -> undefined
null -> object
Array ->object
object -> object
function -> function(function object)
bigNumber -> bigint
number -> number
Boolean -> boolean
string -> string
*/