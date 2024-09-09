// const userEmail = "H@hitesh.ai"              got user email
// const userEmail = ""                         dont have user email
const userEmail = []                           // got user email 


if(userEmail){
console.log("Got user Email");
}
else{
    console.log("Dont have user email");
}


// falsey value 
// false , 0 ,-0 , bigInt -  0n, "" , null , undefined , NaN
// left all falsy value all are truthy value 

// truthy value 
// true , "0", " ",'false' , [] , {} , Function(){} , 

// for check value 

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// how to dedect object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
console.log("Object is empty");
}


// Nullish coalescing Operator (??): null undefined  => its made for null and undefined 

let val1;
// val1 = 5  ?? 10
// val1 =null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined
val1 = null ?? 10 ?? 15


console.log(val1);

// terniary Operator

// condition ? true : false 

const iceTeaPrize = 100
iceTeaPrize <= 80 ? console.log("less then 80") : console.log("more then 80")
