// singleton => apne tarh ka ek he object hai , constructure se bnate hai
// Object.create                      // constructer method isi ke under singleton banta hai 

// literals ki tarh declear krte hai to singleton nahi bnta hai => object litrelas 

// object litreals = object ko declear krne ka tarika hai ese to dono tarh se object he bante hai 
 
//how to access array :-
// myArray =["h","i"]
// console.log(myArray[1]); in that type we know which value in the array using index value  
// but in the object we use keys like after create object
// name : "vivek" in the property name is a key to access the value of "vivek"
// we dont need index value and all         we give name like this as exactly in take like "name" 
// but we cant write because it already acept like this 
const mysym = Symbol("key1");
const mySym2 = Symbol("key2");

const JsUser = {
    name :"hitesh",
    "full name" : "Hitsh Choudhary" ,
    mySym : "mykey1",
    [mySym2] : "mykey2",
    age : 18 ,
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" ,"Saturday"]
}

//access the object =>
    // console.log(JsUser.email);  
// second method 
console.log(JsUser["email"]); 
console.log(JsUser["full name"]);  
// console.log(JsUser.mySym);  
// console.log(typeof mySym);    //undefined
// console.log(typeof JsUser.mySym);   // string 
console.log(JsUser[mySym2]);
console.log(typeof JsUser[mySym2]);


// change the value of object
JsUser.email = "vivek@chatgpt.com"
console.log(JsUser["email"]);

// lock the object values 
// Object.freeze(JsUser)
   
JsUser.email =  "hitesh@google.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser.greeting);

