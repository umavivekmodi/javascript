//  promise is a talking language between two systems. it has three states like - panding ,fulfilled and rejected 
// promise is an object
// fetch('https://google.com').then().catch().finally()
// .then (Response)
// .catch(error)
// .finally(a good url)

const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls , cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise (function(resolve , reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})
