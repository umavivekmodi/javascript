//controlFlow ya LogicFlow

//if 

// if(true){
// // if condition is true then run the code 
// }
// if(false){
// //if condition is false then it cant run the code 
// }
// exe- 1 
const isUserLoggedIn = true
if(isUserLoggedIn == true){
// console.group("user Logged in")
}
// < ,> <= ,>= , !=  , (===) its not only check value also check data type , !== its check negative value 

// exe-2
if(3 != 2){
    // console.log( "3 is not equal to 2")
}

//exe-3

if(2 == "2"){
    // console.log("its check only value")
}


//exe-4
if(2 === "2"){
    // console.log("its check value ith data type")
}

//exe=5
// const temperature = 41
// if(temperature === 41){
//     console.log("less then 50");
// } else{
//     console.log("greater then 50");

// }
// console.log("Execute");

const score =200
if(score >100){
    // const power = "Fly"
    // var power = "Fly"
    // let power = "Fly"


    // console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); scope related but we use var in place of const and let ,then story is diffrent
// console.log(`USer power: ${power} `);

// short hand notation 
//  implisit scope => means im just imagine that socpe is here 
// const balance= 1000
// if(balance > 500) console.log( "test") ,
// console.log("test2");  // its not good pratice 

// if(balance < 500){
//     console.log("less then 500");
// }
// else if (balance < 750){
//     console.log("less the 750");
// }
// else if (balance <900){
// console.log("less then 900");
// }
// else{
//     console.log("less then 1200");
// }

//shopping cart
// const userLoggedIn = true
// const debitCard = true
// if(userLoggedIn && debitCard && 2 == 2){
//     console.log("Allow to buy course");
// }
const userLoggedIn = true
const debitCard = true
const LoggedFromGoogle = false
if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy course");
}