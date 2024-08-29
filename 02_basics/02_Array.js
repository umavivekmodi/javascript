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