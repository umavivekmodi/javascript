// const coding = ["js","ruby","java","python","cpp"]
// for..Each

// const values = coding.forEach(  (item)=> {   // for each koi bhi value return nahi krta hai 
// // console.log(item);
// return item
// })
// console.log(values);


// methods =>  filter  // filter value ko return krta hai
const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = myNums.filter((num)=> num > 4 )
const newNums = myNums.filter((num)=>{     // [] empty  array return return use nahi krne par
         return num > 4                 // scope { } open kren pr return key word use krna pdega 
})
//  console.log(newNums);


//  // for.. each
//  const myNumbers = []
//  myNums.forEach((num)=>{
//  if (num>4) {
//     myNumbers.push(num);
//  }
//  })
// console.log(myNumbers);

const books =[
   {title: 'book one', genre : 'Fiction' , publish: 1981, edition: 2004},
   {title: 'book two', genre : 'Non-Fiction' , publish: 1992, edition: 2008},
   {title: 'book three', genre : 'History' , publish: 1999, edition: 2007},
   {title: 'book four', genre : 'Non-Fiction' , publish: 1989, edition: 2010},
   {title: 'book five', genre : 'Science' , publish: 2009, edition: 2014},
   {title: 'book six', genre : 'Fiction' , publish: 1987, edition: 2010},
   {title: 'book seven', genre : 'History' , publish: 1986, edition: 1996},
   {title: 'book eight', genre : 'Science' , publish: 2011, edition: 2016},
];

// let userBooks = books.filter((bk)=> bk.genre==='History');
// console.log(userBooks);
 

// let userBooks = books.filter((bk)=>bk.publish<1990);
// console.log(userBooks);

// let userBooks=books.filter((bk)=>bk.edition>2005);
// console.log(userBooks);


 let userBooks=books.filter((bk)=>books.publish>=2000);
console.log(userBooks);