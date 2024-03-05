//object can be declare in two ways using literal and constructor
//and there is one more concept singleton
//singleton ka simple mtlb hai jab app koi constructor se banate hai tab single object banta hai...lekin agar app dusri tarah se banate hai to multiple instances ban jate hai...(aage aur bhi deep me dekhenege)

//..in simpal way for now bus itna yaad rakho ki literal se agar define kiya to singleton nahi banta aur constructor se agar banega to hamesha singleton hi banega

//object literals 
//Object.create --> isi ko bolte hai constructor ke through banane kaa
const simpleObject = {} //ban gaya object

const jsUser = {
    name: "Umesh",
    "full Name":"Umesh Maurya",
    age: 21,
    location: "Mumbai",
    email: "umes@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Tuesday"]
}
//yaha pe by default system iske key string process karta hai "name"

console.log(jsUser.email); //one way to access the object values(it is like get in java)
console.log(jsUser["email"]); //this way is like we are accessing via key of the object ...we are giving key in string because in system it is stored as a string

console.log(jsUser["full Name"])

console.log("----------------------------------------------------");
const mySymbol = Symbol("name")

const user2 = {
    mySymbol : "Umesh", // this one is not my symbol this is basic key 
    [mySymbol] : "Umesh Maurya" //right way to use symbol as a key
}
console.log(user2); //in this log will get proper data type of symbol
console.log(typeof user2.mySymbol ," --> ",user2.mySymbol);

console.log(typeof user2[mySymbol] ," --> ",user2[mySymbol]) //write way to access my symbol ..if you do not follow this then you will get tha normal one...still it is showing string typeof because in system key is always stored as a string

console.log("-----------------------------------------------------------");
//changing the object value
jsUser.isLoggedIn = false
console.log(jsUser.isLoggedIn);
//also we can lock the value so that no one can change the value
Object.freeze(jsUser) //commented to test single field freezing
//trying to change the value after freeze whole object
jsUser.age = 18
console.log(jsUser); //it soes not have any effect on my object
//we can freeze particular key also for example
//Object.freeze(jsUser.location)          <------
jsUser.location = "Khadavali" // due to freezing this changes does not reflect my object
console.log(jsUser.location);
