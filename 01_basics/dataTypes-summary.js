// dataTypes:- 
// primitive and non-primitive
// Number              object
// String              function
// BigInt              Array     
// Boolean
// symbol
// null
// undefined
//   data's categorization based on  :--How to store and access data types then its divided in two part's := its 
// primitive :- Its call by value    :- changes done in the copy 
// non-primitive/ reference type :- Its call by refrence

// primitive 
// 7 types:- string,Number,boolean,null,undefined,symbol,BigInt


// Q:- which types of javascript language  ==== static type or dynamic types
//   answer := javascript is a dynamic type of language because we declare a variable then 
// we cant specify the variable type its need in the run time //bacically we cant define language 
// example variable = 100     // variable = "abc"    // variable = boolean
                                                            //type of value:- result
const score = 100                                               //number
const scoreValue = 100.3                                        //number
const isLoogedIn = false                                       //boolean
const outsideTemp = null                                        //object
let userEmail;                                                  //undefined

// symboldefine                                                 symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2343555764693789489n                          //bigint


// Reference (Non-Primitive):-Array,object,function
const heros = ["shaktiman", "naagraj","doga"]  //Array              object
// objects:                                                         object
let myObj = {
    name:"hitesh",
    age : 22,
}
//function   ====   function(){}                                     object function
const myFunction = function(){
console.log("hello world");
}

// how to know data type of variable 
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof myFunction);

//https://262.ecma-international.org/5.1/#sec-11.4.3