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

//console.log(typeof "abc");


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

//***************************************Memory*******/

//Stack(Primitive) , Heap(Non-primitive)

//jab bhi stack memory use hoti hai iska mtlb ki apne jo bhi variable declare kiya hai uska apko ek copy milta hai

//aur jab bhi koi chij heap ke andar jata hai to apko milta hai reference original value ka iska mtlb aap jo bhi change karenge wo original value me change hota hai

let myName = "Umesh Maurya" //primitive value jayegi stack me

let anotherName = myName  
anotherName = "umya bhai"

// console.log(myName);
// console.log(anotherName);

let user = {
    email : "user@google.com",
    upi : "123ybl.com"
}

//variable name store hoga stack me aur pura object store hoga heap me...
//stack to heap reference jayega

let userTwo = user

//hum log ko same object ka reference mila hai na ki naya koi create hua hai
//stack me dusra variable name bana hai but reference to object is same

let str1 = "this is primitive str"

console.log(typeof str1);// string

let str2 = new String("this is non primitive");

console.log(typeof str2); //object 