//  define singalton ,constructer type object 
// define empty object  ----singalton object ---to ragister user as a object 
// const tinderUser = new Object()
// console.log(tinderUser);

//second option
// const tinderUser = {} // non-singalton object 


const tinderUser = new Object()
tinderUser.id = "123abc",
tinderUser.name = "Samaya",
tinderUser.isLoggedIn = false 
// console.log(tinderUser);


// object in object
// const regularUser = new Object()
// regularUser.email = "samaya@gmail.com"

// other way to declear object without singalton

const regularUser={
    email: "samaya@gmail.com",
    fullName: { 
        userFullname: {
            firstName : "hitesh",
            lastName : "choudhary"
        }
    }
}

// console.log(regularUser.fullName.userFullname.lastName);

// combind ya marge object 
const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = {obj1 , obj2} //object k under object 
console.log(obj3);
//sperad operator 
const obj4 = {...obj1 , ...obj2}  
console.log(obj4);
//asign se object ko asign kr skte hai
const obj5 = Object.assign(obj1 ,obj2)// obj5 or obj 6 are same but { difference}
console.log(obj5);
// optional perameter{}
const obj7 = {5:"e" , 6:"f"}

const obj6 = Object.assign({}, obj1 ,obj2 , obj7)
console.log(obj6);
// when value comes from data base 
// array ke under objects 

const users = [
    {
        id : 1 , 
        email : "h@gmail.com"
    },
    {
        id : 2  , 
        email : "hvd@gmail.com"
    },
    {
        id : 3 , 
        email : "mn@gmail.com"
    },
    {
        id : 4, 
        email : "hmu@gmail.com"
    },
    {
        id : 5 , 
        email : "lk@gmail.com"
    },
    {
        id : 6 , 
        email : "ty@gmail.com"
    },
]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));   // tinderuser ka datatype array 
// all key ko lekr array me rakh diya ab unke uper loops bhi use kr skte hai
// keys ke jaise he unki vlaue ko bhi nikal skte hai
console.log(Object.values(tinderUser));  // keys and values dono he array me saperate hokr aa jati hai 

// enteries 
console.log(Object.entries(tinderUser));  // jo entries kri hai unko saperate array me dikhata hai 
// means array ke ander array set kr dete hai 

// value ka pta krna ki tinderuser ke pass wo value hai ya nahi
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // boolean me result deta hai 
console.log(tinderUser.hasOwnProperty('isLogged'));  // boolean me result deta hai 


// de-structureing 
// Array ki bhi hoti hai or object ki bhi
//  object de-structuring 

const coures ={
    courename :"Js in hindi",
    prize : "999",
    courseInstructor: "hiteshChoudhary"
}
// coures.courseInstructor

const {courseInstructor :instructor} = coures
console.log(instructor);


// not in js its react 
// const navbar = ({company}) =>{

// }
// navbar(company = "hitesh")

