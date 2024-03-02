let score = 33
// console.log(typeof score)

let stringNumber = "Umesh"

let valueInNumber = Number(stringNumber)
// console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN (not a number)
//null => 0
//true => 1, false => 0
//undefined => NaN
//"umesh" => NaN

let isLoggedIn = "umesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1 => true; 0 => false
//"" => false ; "umesh" => true

let someNumber = 33

let strNumber = String(someNumber)
// console.log(someNumber);
// console.log(typeof strNumber);

//**********************Operations*****************************

let value = 3
let negValue = -value
/*
console.log(negValue);

console.log(2+2); //4
console.log(2-2); //0
console.log(2*2); //4
console.log(2**3); //8
console.log(2/3); //0.6666 
console.log(2%3); //2
console.log(0/3); //0
console.log(3/0); //Infinity
*/

let str1 = "hello"
let str2 = " Umesh"

console.log(str1 + str2); //hello Umesh

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 +2); //122
console.log(1 + 2 + "2"); //32 

console.log(+true); //1
console.log(+""); //0
