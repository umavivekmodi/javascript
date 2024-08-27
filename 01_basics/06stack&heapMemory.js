//Q:- how to work memory allocation:-
// stack memory(primitive) and Heap memory(Non-primitive)
//String                              Array
//Number                              Object
//null                                Function
undefined
Boolean
Symbol
BigInt
// original value kin copy milti h        //original value ka reference milta h 
// change copy m hota hai                 // change original value mei hota hai

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive), Heap (Non- Primitive)

let myYouTubename = "hiteshchoudharydotcom"

let anothername = myYouTubename

anothername = "Chaiaurcode"

console.log(anothername);
console.log(myYouTubename);

let userOne = {
    email: "user@google.com",
    UPI : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);