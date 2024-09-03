// jo bhi code likha humne usko ek packet me band krna , 
// fir wo code aap ek command se apne programme me khin bhi use kr skte ho

//1


// how to write a function
//function defination:=
function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
// function refrence  =means function vha rhta hai sift batana hua execute ke liye () ka use hoga 
sayMyName
//function execution:=
// sayMyName()
//2
// function sayMyfullname(){
//     console.log("Uma Vivek Modi");
//     console.log("Uma Modi");
//     console.log("Vivek Modi"); 
// }

// sayMyfullname()
//3
// function addTwonumbers(number1 , number2 ){
// console.log(number1 + number2);
// }
// const result = addTwonumbers(5,10)
// console.log("Result: ", result);

// if there is no number when we use addTwonumber
//4
// function addTwonumbers(number1 , number2 ){  // perameters
//     console.log(number1 + number2);
//     }
//     addTwonumbers(5,"null");  // arguments

//5

// function addnumbers(num1 , num2){
//    let answer = num1 + num2
//    console.log("hitesh"); 
//     return answer
//     console.log("hitesh");      // return use krne k baad koi bhi kaam nahi hoga 
// }
// const answer = addnumbers(9 , 8 )
// console.log("Answer ", answer);

//6


function addnumbers(num1 , num2){

    // let answer = num1 + num2
    // return answer
    return num1 + num2
 }
 const answer = addnumbers(9 , 8 )
//  console.log("Answer ", answer);


 // add two string in function 
//7

 function add_string(  str1, str2 ){
    return str1 + str2 ;
 }
 let concated_string = add_string("Hello " , "World")
//  console.log("concated " , concated_string);

 function full_name( firstName , middlename , LastName){
    return firstName + middlename +  LastName ;
 }
 let fullName = full_name("Uma" , " vivek" , " modi")
//  console.log("myName ", fullName);

//  //8
//  function loginUserMassage(username){
//  return `${username} just logged in `
//  }
//  console.log(loginUserMassage("hitesh"));
//  console.log(loginUserMassage(""));
console.log(loginUserMassage());  // jb hum koi value pass he nahi krte hai to answer =>undefined aata hai

//9   if else statement use
// function loginUserMassage(username ){

function loginUserMassage(username ="sam"){
    // if(username === undefined ){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in `
    }
    console.log(loginUserMassage());