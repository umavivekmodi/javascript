// object literals 
const user = {
    username:"hitesh",
    loginCount: 8 ,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username : ${this.username}`);
        console.log(this);
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// constructor function 
// const promiseOne = new Promise()
// const date = new Date()
//  there in a new => new is a constructor function = its allow to make multipal instance = // a new copy//origanl did'nt effect 
// means less memory spance  but some situationwe need new instance=>new keyword is  create a context ,
// called constructor function.
// in object 
function User(username , loginCount , isLoggedIn){
 this.username = username;     // variable = pass value //this is an object
 this.loginCount =loginCount;
 this.isLoggedIn = isLoggedIn


 this.greetings = function(){
    console.log(`Welcomen${this.username}`)
 }
 return this 
}

// const userOne = User("hitesh" , 12 , true )
// const userTwo = User("ChaiaurCode" , 11 , false)
// console.log(userOne); // without console.log use userTwo overWrite value of userOne, 
// So this reason we use new key word  ///////////////////////////////IMP


// reslove this problem 

const userOne = new User("hitesh" , 12 , true )
const userTwo = new  User("ChaiaurCode" , 11 , false)
console.log(userOne.constructor);  // constructor is property is a reference about us means about user
console.log(userTwo); // inmlisitly define hota hai agr return na bhi kre too result vhi aaega . by default hota h


// 1) when we write a new() key word =>empty object created called instance 
//2)  constructor function call created new key word= its pack all argument init and  give tou 
// 3) all argument injected. this k under inject jo jaega 
// 4) we get them inside the function.