const marvel_heros = ["thors", "spiderman", "Ironman"]
const dc_heros = [ "batman" , "superman" , "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// concat new array return krta hai isiliye usko new variable
//  me hold krna jaruri hota hai tbhi wo sahi answer show krta hai

// const myHeros = marvel_heros.concat(dc_heros)
// console.log(myHeros);

//spread operator => ...
const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);

const mycartoon = ["pokimon","powerRangers","richiRich"]
const myfavCartoon = ["tom&Jerry","shinChain","doremon","hataurdi"]
// const allCartoons =[...mycartoon , ...myfavCartoon]
// console.log(allCartoons);
const allCartoon = mycartoon.concat(myfavCartoon)
// console.log(allCartoon);

// flat method => sbhi array k andar array ko ek bna deta h
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// data scraping me use aata hai
// asking it is array or not 
console.log(Array.isArray("hitesh"));
// converting in Array
// console.log(Array.from("hitesh"));
console.log(Array.isArray({name: "hitesh"})); //intrusting case for interview

// array me convert krna 
let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

let class1Student = 56
let class2Student =65
let class3Student = 43
let class4Student =76
console.log(Array.of(class1Student,class2Student,class3Student,class4Student));

let name1 = "riya" 
let name2 = "sonal"
let name3 = "mohita"

console.log(Array.of(name1,name2,name3));