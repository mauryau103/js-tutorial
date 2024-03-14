//obects ko singleton kaise karte hai ya constructor se kaise define karte hai

const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userfullName: {
            fname: "Umesh",
            lName : "Maurya"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullName);

console.log("---------------------------------");

//optional chaining--> isme ? lagate hai ternary operator ...backend se value aayegi to lena wo sab............


//objects ko combine kaise karenege

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2} // yaha pe object ke andar object chala jayega ...but hame concat karna hai
console.log(obj3);

const obj4 = Object.assign(obj1,obj2)
console.log(obj4);
console.log(obj1===obj4);
const obj5 = Object.assign({},obj1,obj2) // ek empty paranthesis diya jata hai (optional hai) --> empty parathesis ko ek target samjha jata hai baki sare param ko source


const users = [
    {
        id:1,
        email:"umesh@gmail.com"
    },
    {
        id:2,
        email:"maurya@gmail.com"
    },{
        id:1,
        email:"kumar@gmail.com"
    }
]

console.log(users[1]);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("std"));

//Destructuring-------------------
console.log("----------------------------------------");

const course = {
    courseName: "Javascript",
    price: "free",
    courseInstructor: "Umesh"
}

//course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

//hum log yaha uper courseInstructor ki value bahar access kar rahe hai ..

//aur hum use aies name bhi de sakte hai

const{courseInstructor:myteacher}=course
console.log(myteacher);

//isi ko destructring bolte hai


//destructring ko react me thoda advance level me use kiya jayega ..

//rect me methods hote hai jinhe hum prop kahte hai
//maine niche ek props create kiya hai
// const navbar = ({company})=>{

// }

// navbar(company = "hitesh")


