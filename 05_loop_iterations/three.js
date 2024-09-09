//for of loop
// array spacific loop

// ["","",""]  array in string 
// [{},{},{}]  array in object


const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}




// const greeting = "Hello World!"
// for (const greet of greeting) {
//     console.log(`each char is ${ greet} `);    
// }



const greeting = "Hello World!"
for (const greet of greeting) {
    if (greet == ' ') {
        continue;
    }
    // console.log(`each char is ${ greet} `);    
}

// Maps

const map = new Map()
map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('Fr' , "France");
map.set('IN' , "India");


// console.log(map);

// for (const key of map) {
//  console.log(key)   
// }

// for (const [key , value] of map) {
//     console.log(key, ':-' , value)   
//    }

// object in map

// const myObject ={
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key , value] of myObject) {
//     console.log(key, ':-' , value)   ;
    
// }           //myObject is not iterable

