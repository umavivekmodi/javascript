const myObject = {
    js: 'javascript',
    html : 'hyper text markup language',
    cpp :'c++',
    rb:'ruby' ,
    swift: 'swift by app'
}

// for-in loop

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
        
    }

    // for-in loop => array

    const programming= ["js","rb","py","java","cpp"]

    for (const key in programming) {
    //   console.log(programming[key]);
    }



    const map = new Map()  // map is not iterable by using for..in loop-
map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('Fr' , "France");
map.set('IN' , "India");

for (const key in map) {
//    console.log(key);
   
}