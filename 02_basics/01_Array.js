//Array 
// (perenthisis) , [square breckets] , {curly breckets}
const myArr = [0 , 1 ,2 ,3 ,4 ,5]
// const myArr = [1 ,2 ,3 ,4 ,5, true ," hitesh"]  we use all type of element in the array,
//  and array is a object
const myHeros = ["shaktiman", "Naagraaj"]

// ther type of declear array
const Arr2 = new Array(1 ,2 ,3 ,4 ,5) 
// console.log(myArr[1]);

//Array methods  
// push method => add the value in Array
// myArr.push(6)


// myArr.push(7)
//pop method => array ki last value ko remove krna 
// myArr.pop()   


// unshift method => start me value add kr deta hai 
// myArr.unshift(0)
// myArr.unshift(9)

//shift method => jo unshift se dali thi usi value ko remove krta hai 
// myArr.shift()
// includes => value include hai ya nahi     answer boolean type me aata hai
// console.log(myArr.includes(9));

// indexof => index value konsi index pr hai usko btata hai agr nahi ha to -1 answer deta h
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(13));
// console.log(myArr.indexOf(43));

const newArr = myArr.join()  // yhan pr ye array ko join krne k sath sath string type me change kr deta hai 
// console.log(myArr);
// console.log(newArr); 
// console.log(typeof newArr);

// slice , splice 
// slice method = original array me change nahi krta 
console.log("A " , myArr);
const myn1 = myArr.slice(1 , 3)

console.log(myn1);
console.log("B", myArr);
// splice method original array ko manipulate krta hai  
const myn2 = myArr.splice(1 ,3)
console.log("C", myArr);
console.log(myn2);