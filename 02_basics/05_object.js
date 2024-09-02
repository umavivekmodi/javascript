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
const obj4 = {...obj1 , ...obj2}  
console.log(obj4);
const obj5 = Object.assign(obj1 ,obj2)// obj5 or obj 6 are same but { difference}
console.log(obj5);
// optional perameter{}
const obj6 = Object.assign({}, obj1 ,obj2)
console.log(obj6);