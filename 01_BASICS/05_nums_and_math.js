const score = 400
console.log(score, typeof score);

const balance = new Number(100)
console.log(balance,typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  //100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++Maths++++++++++++++++++++++++
console.log('-------------------------------');

console.log(Math);

console.log(Math.abs(-4)); //4 --> negative converts into positive
console.log(Math.round(4.6)); //if 4.3 then 4...but if you want take control in your hand then use ceil and floor
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8)); //8
console.log(Math.random());  // isko value hamesha 0 to 1 ke bich me hi aati hai
//so if 1 to 10 ke bich me chahiye to 10 se multiply kar do and value kabhi bhi  zero bhi ho sakti hai to last me plus 1 bhi kar de
// floor aur ceil use karke single digit me bhi value laa sakte hai

console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min)