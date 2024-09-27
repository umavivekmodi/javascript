// prototype sesssion
// let myName = "hitesh     "
// let myName = "chai       "


// // console.log(myName.length);
// // console.log(myName.trim().length);
// // we want to create a method for trueLength
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let herosPower = {
    thor :"hammer",
    spiderman:"sling",

    getspiderPower:  function(){
        console.log(`spidy power is${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}


Array.prototype.heyHitesh = function(){
    console.log(`hitesh say's hello`);
}

myHeros.heyHitesh()
// herosPower.heyHitesh()


herosPower.hitesh()
myHeros.hitesh()


//inheritence
const user = {
    name:"chai",
    email:"chai@google.com"
}
const teacher = {
    makevideo :true
}
const teachingSupport = {
    isAvailable : false
}

const TSSupport = {
    makeAssignment:" js assignment" ,
    fullTime: true,
    __proto__:teachingSupport
}
teacher.__proto__=user

//new approch
// morden syntax
Object.setPrototypeOf(teachingSupport , teacher)

let anotherUserName = "chaiaurcode              "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is:${this.trim().length}`);
}
anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()