//array
//arrays ke andar mix datatype daal sakte hai
//arrays in js are dynamic in size

const myArr = [0,1,2,3,4,5]
console.log(myArr[1]);

//agar app array ko copy karte hai to wo shallow copy banati hai
//shallow copy --> A shallow copy of an object is a copy whose properties share the same references(point to the same underlying values) as those of the source object from which the copy was made.(it means agar app copied array me koi changes karoge to real wale me bhi changes ho jayenge)

//deep copy --> A deep copy of an object is a copy whose properties do not share the same references(point to the same underlying values) as those of the source object from which the copy was made

const myHeros = ["shaktiman","naagraj"]
console.log(typeof myHeros); //object
const myArr2 = new Array(1,2,3,4,5)
console.log(typeof myArr2); //object
//arrays ke andar prototype ke andar prototype hai -: note
//aur ek property milti hai length ki

//Arrays methods

console.log("---------------------------------------------------");

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9) // ye apke array ke start me value enter kar deta hai ...baki sab element ko shift (so, this is very time consuming if there is more data to add)

console.log(myArr);

myArr.shift() //isme koi parameter nahi pass karna padta ye aage se ek value ko delete kar deta hai

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(1)); //agar koi value exist nahi karti raahegi to -1 return hoga
console.log("------------------------------");
const newArray = myArr.join()
console.log(myArr);
console.log(newArray); //so jab app join use karte hai to apke array ka type badal jata hai aur string ban jata hai

//slice,splice

console.log("----------------");

console.log("A ",myArr);
const myn1 = myArr.slice(1,3) // 3rd include nahi hota

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) //isme 3rd index bhi inlclude bhi hota hai
console.log("C ",myArr);
console.log(myn2);

//IMP note :- slice and splice ka maine diffrence hai ki slice original array pe effect nahi karta hai but splice original array ko bhi modify karta hai...
//aur dusra diffrence ye hai ki slice me end index consider nahi hota but splice me last index bhi consider hota hai