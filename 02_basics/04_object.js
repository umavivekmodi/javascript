
const mySymbol = Symbol("unique key")

const myObject = {
    [mySymbol] : "AB1258", 
    name : "Priya",
    lastName : "sharma" ,
    "full Name" : "Priya Sharma ",
    Gender : "female",
    age : 30 ,
    Address :  "Jaipur , Rajasthan ",
    isLoggedIn : true , 
    educationQualification : ["Graduation" , "Post Graduation" , "M.B.A" , "M.Sc."]
}

// freeze all the properties of the object


// Object.freeze(myObject);
// console.log(myObject);

//  but try to freeze only one property => gender 

Object.defineProperty(myObject,'Gender' ,{
    writable : false,
    configurable : false
});
// console.log(myObject["Gender"]);

myObject.Gender = "male"
// console.log(myObject["Gender"]);

// myObject.age = 34
// console.log(myObject["age"]);
// console.log(typeof mySymbol);
// console.log(myObject[mySymbol]);
// console.log(myObject);



//deep freeze ???? 



const person = {
name : "Vivek Modi" ,
age : 30 , 
Address : {
Regidency: "Guamn Heights 607", 
street : "Patel Marg",
city: "Jaipur",  
country : "India"
}};
console.log(person);
//  Apply => deep freeze in person
deepfreeze(person);
 person.name = "vedika",
 person.Address.city = "Bikaner"

 console.log(person);