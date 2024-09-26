//  promise is a talking language between two systems. it has three states like - panding ,fulfilled and rejected 
// promise is an object
// fetch('https://google.com').then().catch().finally() ,,,,internal toool is fetch()
// .then (Response)
// .catch(error)
// .finally(a good url)

// promise meanse => we give a task to promise that go in the queue but
//  its not complete  quickly,but its take sometime to complete. promise complete in future. we use async await also.
// promise has three state=> panding , fulfilled and rejected

// exe:1 we consume promise comanly :- fetch('https://github.com/hiteshchoudhary').then(response).catch(error),finally(a good tutorial)
// its good to create promise after its consumed 
// promise take a callback init,

// 1)
// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB Calls ,cryptography, network call
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     } , 1000)
// })


// //consume
// promiseOne.then(function(){
//     console.log("Promised consumed");
    
// })
// exe 
// const promise = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('task is complete');
//         resolve()
//     } , 1000)
// })
// promise.then(function(){
//     console.log("task is consumend");
// })
// what is completely consumed not async task to complete ho gya but promise pura he ni kra 
// ==resolve or .then ko connect he ni kiya
// .then se connect krne k liye resolve ko connect krna hoga= 
// resolve method ko call krna hoga  settimeout me
// resolve execute hone k baad usme value bhi passs kr skte hai ,,,


// exe:2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// exe:3

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai" , email:"chai@example.com"})
//     })
// })

// promiseThree.then(function(user){
// console.log(user);
// })

// EXE:4 error in it
// resolve ke under most of object pass hota hai

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        // let error = false

        if(!error){
            resolve({username :"hitesh",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
console.log(user);
return user.username
})
.then((username)=>{
console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})

// exe:5 a

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
     let error = true
    //  let error = false

     if(!error){
        resolve({username:"javascript",password:"345"})
     }   else{
        reject("ERROR: js went wrong")
     }
    },1000)
});
// promiseFive.then((){
//     console.log()
// })
// using second syntex async and await => cant handle errors directaly 
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive()
// rape it in try and catch block without it gives us rejection error 
async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

// for next class 
async function getAllusers(){
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data =  response.json()
  console.log(data);
}
getAllusers()
// promise pending 


// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//    const data = await response.json()
//    console.log(data);
//     } catch (error) {
//         console.log("E: " , error);
//     }
//  }
//  getAllusers()


//  .then .catch formate me 


fetch('https://github.com/hiteshchoudhary')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


// fetch is a exciting feacture of javascript ,  js before its in browser but
//  in node js we use fatch all paradime are changed 