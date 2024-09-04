// console.log('start');
// setTimeout(()=>{
//     console.log('timer done');
// },1000);
// console.log('End');

// console.log("morning");
// setTimeout(()=>{
//     console.log("noon timer done");
// },1000);
// console.log("night");

//simple programme of setTimeout
// console.log("start");
// setTimeout(()=>{
//     console.log("this massage is delayed two seconds")
// },2000);
// console.log("End");


// console.log("get set ready");
// setTimeout(()=>{
//     console.log("this massage delayed for 3 seconds")
// },3000);
// console.log("stop");


// console.log("it's Start");
// setTimeout(()=>{
//     console.log("this massage delayes for 4 seconds")
// },4000);
// console.log("now stop");


// console.log("Start");
// setTimeout(()=>{
//     console.log("this massage shows after 5 seconds");
// },5000);
// console.log("ends now");

// passing Argument to the Callback function
console.log("greet massage for you");
function greet(name){
    console.log(`Hello,${name}`);
}
setTimeout(greet , 3000, "Vivek");


//exe


function massage(name){
    console.log(`WelCome Mrs.${name}`);
    
}
setTimeout(massage ,5000, "uma modi");


