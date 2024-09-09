//reduce   exe;- in shopping cart


// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc ,currval){
//     console.log(`acc:${acc}and currval :${currval}`);
//     return acc + currval  
// }, 0)
// console.log(myTotal);


const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc ,currval){
//     console.log(`acc:${acc}and currval :${currval}`);
//     return acc + currval  
// }, 3)
// console.log(myTotal);

//through arrow function
const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        prize : 2999
    },
    {
        itemName: "mobile development course",
        prize : 5999
    },
    {
        itemName: "Data Science course",
        prize : 12999
    }
]

const prizeTOpay = shoppingCart.reduce((acc ,item)=>acc+item.prize,0) 
console.log(prizeTOpay);