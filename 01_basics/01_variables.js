const  accountId = 123443
let accountEmail= "uma@google.com"
var accountPassword = "0987"
accountCity = "jaipur"
let accountState; 

//  accountId =  2 // not allowed
// console.log(accountId); 
/*
perfer not to  use  var
because of issue in block scope  and functional scope
*/
accountEmail = "um@gm.com"
accountPassword= "121212"
accountCity= "goa"

console.table([accountId , accountEmail,accountPassword , accountCity  , accountState])