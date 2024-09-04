// this means=> current context(value ) 
// . Global Context
// In the global context (outside of any function), this refers to the global object. 
// In a browser, this is typically the window object.

const user = {
    username: "hitesh",
    prize: 999,
    welComeMassage: function(){
        console.log(`${this.username} , WelCome to Website`);
        console.log(this);
    }

}
// user.welComeMassage
// user.welComeMassage()
// user.username = "sarthi"  // change the value 
// user.welComeMassage()
// console.log(this);   // empty object        
  // browser k under jo globle object h usko => window object khte h 


//   function chai(){
//     let userName = "vivek"
//     console.log(this.userName); // undefined aa rha h isme hum  function me this use nahi kr skte  sirf object me he kr skte h
//   }
//   chai()


//exe
// const chai = function(){
//     let userfullname = "hiteshChoudhary"
//     console.log(this.userfullname);             // isme bhi undefined he aa rha h 
// }
// chai()


// exe of this function             //child perent ki property ko access kr skta h
const person = {
    name: "mahima",
    greet: function(){
        console.log(`Hello my name is ${this.name}`)
        console.log(person);
    }
    
};
person.greet();


//Arrow function      ()=> {}
const chai = ()=> {
    let userfullname = "hiteshChoudhary"
    console.log(this.userfullname);             // isme bhi undefined he aa rha h 
}
// chai()

//exe  explisit return => jisme return keyword likhna hoga 

// const addtwo= (num1 , num2 )=>{   //curly brackets ho to return likhna hoga
//  return num1 + num2
// }
// console.log(addtwo(3 ,4 ));

// implisit return  = jisme return keyword nahi likhna hota

// const addtwo= (num1 , num2 )=> num1 + num2
   
//    console.log(addtwo(3 ,4 ));



// const addtwo= (num1 , num2 )=> (num1 + num2)  // agr perenthisis ho to return keyword nahi likhna hoga 
   
//    console.log(addtwo(3 ,5));

// when return object 


const addtwo= (num1 , num2 )=>( {userFullname: "vivkeumaModi"})  // agr perenthisis ho to return keyword nahi likhna hoga 
   
//    console.log(addtwo(3 ,5));

//    object  ko return krwane k liye usko parenthisis me rap krna he hoga 



// exe 
const myArr = [2,5,9,10,74]
// myArr.forEach(function(){})
// myArr.forEach(()=>{})


    //arrow function example

    // multiply two numbers

    const multiply = (num1 , num2) => num1 * num2 ;
    // console.log(multiply(4,8));

    const multi = (val1 , val2 )=>(val1 * val2);
    // console.log(multi(9 ,7))

    // add two string by using arrow function

    const stringAdd = (str1 , str2 )=>(str1 + str2);
    // console.log(stringAdd("hello", " world."))

    const myName = (string1 ,string2 )=>(string1 + string2);
    // console.log(myName("uma" ," modi"));

    // greet by add name
    const greet = name => `Hello ${name}!` ;
    // console.log(greet("Vivek"));

    const welComeMassage = name=>`Walcome ${name} in our company!`;
    // console.log(welComeMassage("Uma Modi"));

    // hello massage print 
    const massage=() => ("Hello World");
    // console.log(massage());

    const createFunction = (name , age )=> ({name: name ,age: age});
    // console.log(createFunction('monika' , 28));