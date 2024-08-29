//Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let myCreatedDate =  new Date(2024 , 0 ,24);
// let myCreatedDate =  new Date(1996 , 0  , 30);
// let myCreatedDate =  new Date(1994 , 0  , 23);
// let myCreatedDate =  new Date(2024 , 0 ,24 ,5 ,3);

// let myCreatedDate =  new Date("2023-01-14"); //yy-mm-dd
let myCreatedDate =  new Date("01-14-2024"); //mm-dd-yy

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


//time stamp:==
let myTimeStamp = Date.now();
// console.log(myTimeStamp);   //result in milisecond  1724926769278
// console.log(myCreatedDate.getTime()); 
// console.log(Date.now()/1000); // answer in decimal value   1724936815.602

// console.log(Math.floor(Date.now()/1000));  //1724936932

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// console.log(` the date is ${newDate.getDay()} and  the time is ${newDate.getMonth()}`);

newDate.toLocaleString('default',{
     weekday : "long" , 
     timeZone : "Asia/Dubai"
})
