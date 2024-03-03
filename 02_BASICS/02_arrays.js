const marvel_heros = ["thor","Ironman","SpiderMan"]
const dc_heros = ["Superman","flash","batman"]

//agar app pure ek array ko direct ek array ke andar dalenge to wo ek array ke andar ek array le leta hai...use bhi ek object samjhta hai

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

console.log(marvel_heros.concat(dc_heros));
//concat will return a new array

const all_new_heros = [...marvel_heros,...dc_heros]
//above given example is known as spread.
//concat me appp ek array pass karte hai but spread app multiple arrays ko spread kar sakte hai

console.log(all_new_heros);

console.log("------------------------");

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

// above return a new array with all sub array elements concatenated into it recrsively up to the specified depth

//app yaha pe exact depth bhi de sakte hai ya to defined depth dekh sakte hai like Infiniity

console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))// [] yaha apko batana padega ki keys ka array banau ya values ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));