function sayMyName(){
    console.log("U");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName //-> isko reference bolte hai...isko aise likhne pe kuch hoga nahi
//sayMyName() //-> ise function bolte hai

function addTwoNumbers(number1,number2) { //inko parameters bola jata hai
   console.log(number1+number2)
}

const result = addTwoNumbers(3,null) //inko arguments bolte hai

function addTwoNumbersWithReturn(number1,number2) { //inko parameters bola jata hai
let res =number1+number2
return res
console.log("this will not print"); //after return statement no work is done-:unreachable code
}

console.log("result :- "+addTwoNumbersWithReturn(5,6));

//-----------------------------------------------------------

console.log("--------------------------------------------------------");

function loginUserMessage(username){
    if (username === undefined) {
        console.log("please enter a usernama");
        return
    }
    return `${username} just logged in`
}
//hum log if(!username) aisa bhi kar sakte the ....kyu ki i think undefined ka boolean false hi hota hai humne basics ke first lecture me dekha tha

//loginUserMessage("umesh")
console.log(loginUserMessage("umesh")); 
console.log(loginUserMessage()); // agar kuch pass nahi karenge toh undefined aayega ...jis if else se handle kar sakte hai

//aap default value bhi de sakte hai ...jisse wo kabhi if me nahi jayegi

// if(username ="sam"){

// }
