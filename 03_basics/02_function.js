// like making shopping card when dont know how much peremeters aer come

//rest operator are same but work diffrently => depends on its use
// function claculateCardPrize(...num1){           // rest operator

//1
function claculateCardPrize(val1,val2 , ...num1){           // rest operator

 return num1
}
// console.log(claculateCardPrize(2))
console.log(claculateCardPrize(200,400,600,800,900,700))


//pass the object in function
//2
const user = {
    username : "hitesh",
    prize : 199
}

function handleObject (anyObject){
   console.log(`username is ${anyObject.username} and prize is ${anyObject.prize}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    prize: 399
})

//exe
const myUser = {
    Name: "kumar",
    fullName: "kumar rao",
    phoneNumber : 2365876454 , 
    LoggedIn : false
}

function tryObject(myObj){
    console.log(` user full name ${myObj.fullName} and
         phone number is ${myObj.phoneNumber} and
          logged ${myObj.LoggedIn}`)
}
tryObject(myUser)


//pass the Array in function
//3
const myNewArray = [200 ,400 ,600 ,900]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200 ,400 ,600 ,900]));
// exe
const newStringArray = ["Aadhya" ,"Aanya" , "Anaya", "Anish" , "Aayu"]
function returnthirdValue(getArray){
    return getArray[3]
}
// console.log(returnthirdValue(newStringArray));

//exe
const vehicleName = []
function returnAvehicle(getArray){
    return getArray[6]
}
// console.log(returnAvehicle(["car" , "bus" ,"boat" , "bicycle" ,"bike" ,"scooty" , "helicopter"]));