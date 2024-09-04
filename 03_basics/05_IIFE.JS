// Immediately Invoked function Expression(IIFE)  // jo function immeditly execute ho jaae 

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// chai()


(function code(){    // named IFFE
    console.log(`CODE STARTED`);
})();

// sometime globle socpe create palution so remove globle scope palution we use IIFE

( (name)=>{  // PASS THE PEREMETERS
console.log(`DB connected Two${name}`);
})('   hitesh');

(  ()=>{   // unNamed IFFE
console.log(`DB connected three`);
})();
// THREE UN-NAMED IFFE EK SATH LIKHNA USME ();  JARURI HOTA HAI

( ()=>{
console.log(`DB connected four`)
})();


(()=>{
console.log(`DB connected five`)
})();

(()=>{
    console.log(`DB connected six`)
})();

(function seven(){
console.log(`DB connectd seven`)
})();