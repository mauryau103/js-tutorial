//Date

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getFullYear());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,5,3) //in javascript month start with 0
//lekin jab app yyyy-mm-dd karte hai to apka month 01 se start hota hai

let myDate2 = new Date("2023-01-21");
console.log(myDate2)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

myDate.toLocaleString('default',{
    weekday: "long"
})