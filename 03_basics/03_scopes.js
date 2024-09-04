// let a = 10 
// const b = 20 
// var c = 30  
                                                                        // globle scope 
// var c = 300
{
    // it is a scope => we show it in the function ,if else other place //block scope 
}

let a = 300

if (true) {
    let a = 10 
    const b = 20 
    //  c = 30
    console.log("block Scope : ", a)  ;
}
console.log("globle scope : " ,a);  // node ke through jb hum globle scope check krte hai
//  vh browser me inspect ke through check krte hai usse alag hai 
// console.log(b);
// console.log(c);  // it is available 


// for loop
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


//nested scope     // child function parent function ko access kr skte hai 
function one(params) {
    const username = "hitesh"
    function two(params) {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);  // error of not defined

    // two()
}
// one( )


// exe 2

function parentFunction(){
let parentvar = "I am the parent";
function childFunction(){
    let childvar = " I am the child ";
// console.log(parentvar);
return childvar;
}
// console.log(childFunction());
// childvar()
}

// parentFunction();


//exe 
if (true) {
    const username = "hitesh Choudhary"
    if (username ==="hitesh Choudhary") {
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
}
// console.log(username);

// exe+++++++++++++++++++++intrusting+++++++++++++++++++++++++++++++++++++

console.log(addOne(5));  // yha run ho jata hai start me likhne se 
function addOne(num){               //function
return num + 1
}

addOne(5)       // return hua h print nahi
// console.log(addOne(5));         // return k sath print bhi hua h 


addTwo(5) // insme initialization error deta hai 
const addTwo = function(num){                   // experation
    return num + 2
}
// addTwo(5)
