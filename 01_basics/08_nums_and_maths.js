const score = 400
// console.log(score);
// console.log(score.toString());
// scoreTwo = score.toString()
// console.log(typeof scoreTwo)
// console.log(typeof score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// balance2 = balance.toString()
// console.log(typeof balance);
// console.log(typeof balance2);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));    // decimal value add krta hai

const otherNumber =  1123.8966
// console.log(otherNumber.toPrecision(3));   //23.9  = 23.8966
// console.log(otherNumber.toPrecision(3));   //124   = 123.8966
// console.log(otherNumber.toPrecision(3));   //1.12e+3 = 1123.8966

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++Maths+++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));

// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.5));
// console.log(Math.min(4,3,7,8,0,2));
// console.log(Math.max(4,3,7,8,0,2));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1 ))+ min)
