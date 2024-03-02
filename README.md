# js-tutorial
A code repo for javascript tutorial

01_Basics_Variables

javascript ka jo compiler hai apne pass let's say node js ...so usme instruction likha gaya hai ki particular keyword pe kya opertion perform karna hai...
let's say const so const define ho jayega ek initialized value ke sath.

const se koi value lock hue to app use change nahi kar sakte hai.

phir bhi agar app change karte hai to editor pe allowed to ho jayega ...but jab code run hota hai tab node use scan karke error deta hai "TypeError: Assignment to constant variable."...

abb yahi same chiz agar hum log java me karte to compile time pe hi error aa jata hai ....but yaha pe sab kuch run time pe ho rha hai

js me const ko define karne ka sirf ek hi way hai ....lekin variable ko define karne ke 3 ways hai ...tino me koi diffrence nahi 

aur hum var abb use nahi karte...kyu ki pahle javascript me ek problem hua tha block ke andar define kiye hue variables like var se define kiye hue variable code me kahi se bhi change ho jate the ...so iss problem ko tackle karne ke liye let aaya ...

aur agar apne ko multiple values print karni hai to console.log pe square braces ke andar sare variable ka naam de do ...ya to console.table me [] ke andar sare variable ka naam dedo ....jis se proper format me bhi data dikhta hai

....so always use const and let aur bina const aur let ke jo variable define hua hai wo achha practice nahi hai

agar js me koi variable ko initialised nahi karte to usme by default undefined store hota hai

-----------------------------------------------------------

01----datatypes

javascript me pahle ke jo purane tarike thi like class, modules ...so abhi arrow function aur aise hi bhut nahi updates aaye...but javascript community apne purane codes ko nahi change karna chahte ...so unhone ek keyword define kiya.

"use strict";...isko use karke code karoge to apka compiler apke code ko new version of java se treat karega

but ab ye bhi ek standard ho gaya hai ... isko nahi bhi diya to bhi new version se hi treat hota hai...kyu sab log nahi updates logic hi use karte hai

aur ek imp point app alert nahi use karte hai....karte hai but uske diffrent way hai node me...hum use isliye nahi kar sakte kyu ki ye node hai..agar yahi browser ka js compiler rahta to run ho jata but abhi error aata hai "ReferenceError: alert is not defined".

javascript ka document ecma pe milta hai..sab browser wale milke ek ecma script banaya mtlb javascript ka standard ki..kaise kya hota hai

js me java ke jaise alag se datatype batana nahi padta..python ki tarah compiler use detect kar leta hai ...
