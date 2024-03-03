let name = 'umesh'
let repoCount = 15

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('umesh-um')
//string andar hii ek char array jaisa store hota hai

console.log(gameName[0]); //u
console.log(gameName.__proto__); //isme {} aisa print hua hai ..but isme bhut methods hai
// we can call our method name using proto then string method name or we can method name directly.
//js me methods ko hi prototypes kahte hai

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4) //isme 3rd index tak hi lega
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = "  Umesh  "
console.log(newStringOne.trim());

const url = "https://umesh.com/umesh%20%maurya"

console.log(url.replace('%20%', '-'));

console.log(url.includes('umesh'));

console.log(gameName.split('-')); //arr me split karke store kar dega