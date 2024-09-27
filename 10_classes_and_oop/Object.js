////////////////prototype behaviour////////////////////////////////////
// java script behaviour=> prototype behaviour => unique =>
    // object=> new keyword learn 
    function multipleby5(num){
        return num*5
    }
//    console.log(multipleby5(5)) 
multipleby5.power = 2 
   console.log(multipleby5.power);
   console.log(multipleby5.prototype); 

   function createUser(username , score){
    this.username =username 
    this.score = score
   }

   createUser.prototype.increment = function(){
    this.score++
   }
   createUser.prototype.printMe = function(){
    console.log(`prize is ${this.score}`);                 // jis means this 
   }
const chai =  new createUser("chai" , 25)
const tea =  createUser("tea", 250)

chai.printMe()

// Here's what happens behind the screans when the new keyword is used:-
// 1) A new object is created: The new keyword initiates the new creation of a javascript object.
// 2)  A prototype is linked: The newly created object gets linked to
//  the prototype property of the constructor function. This means that
//  its has access to properties and element and method defined on the constructor's prototype.
// 3) The constructor is called : The constructor function is called with the specified 
// arguments and this is bond to newly created object. IF no explicit return
//  value is specified from the constructor , javascript assumes this, the newly created object,
//  to be the intended return value.
// 4) The new object is returned: After the constructor function has been called, if it doesn't 
// return a non-primitive value (object ,array , function etc.), the newly created object is returned.