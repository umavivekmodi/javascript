//hidden chijo k bare m btati hai
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);


// const mynewObject = Object.create(null)
const chai = {
    name:"ginger chai",
    prize:250,
    isAvailable :true,
    
    orderChai: function(){
        console.log("chai nahi bni");
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai , 'name',{
    writable: false ,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key , value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key}: ${value}`);
}
}