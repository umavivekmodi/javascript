<!-- md means mark down file -->
# Projects related to DOM

## project link
[click here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## Project One 
```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");
//  about events 
buttons.forEach(function(button){
console.log(button);
button.addEventListener('click' , function(e){
//  only this code solve all problem without using if condition
// body.style.backgroundColor = e.target.id; 
  console.log(e);
  console.log(e.target);
  if(e.target.id === grey) {
  // body.style.backgroundColor = "grey";
  body.style.backgroundColor = e.target.id;
  }

  if(e.target.id === white){
  body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === blue){
  body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === yellow){
  body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === purple){
  body.style.backgroundColor === e.target.id;
  }
  if(e.target.id === green){
  body.style.backgroundColor === e.target.id;
  }
  if(e.target.id === red){
  body.style.backgroundcolor === e.target.id;
  }
})
})


```


## Project 2 solution code

``` javascript
const form = document.querySelector('form');
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#result');

if (height === '' || height < 0 || isNaN(height)) {
results.innerHTML = `Please give a valid height${height}`;
}
else if(weight === ''|| weight < 0 || isNaN(weight)){
results.innerHTML =`Please give a valid weight ${weight}`;
} 
else{
 const bmi = (weight / ((height*weight)/10000)).toFixed(2)
 // show the result
 results.innerHTML=`<span>${bmi}</span>`
}
});

```

## Project 3 solution code 

```javascript
const clock = document.getElementById('clock');
// document.querySelector('#clock')
// let date = new Date();
// console.log(date.toLocaleTimeString());

// setInterval(function(){},1000)
setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000);

```



## Project 4 solution code 

```javascript 

// console.log(parseInt(Math.random() * 10 + 1));
let randomNumber = parseInt(Math.random() * 100+ 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGuess=[];
let numGuess = 1;
let playGame= true;


if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess){
  // to check = guess a valid number 
if(isNaN(guess)){
  alert('Please enter a valid number')
} else if (guess < 1 ){
  alert('Please enter a number more then 1')
}else if(guess >100){
  alert('Please enter a number less then 100')
}else{
  prevGuess.push(guess)
  if(numGuess===11){
    displayGuess(guess)
    displayMassage(`Game Over. Randome number was ${randomNumber}`)
    endGame()
  }else {
    displayGuess(guess)
    checkGuess(guess)
  }
}
}

function checkGuess(guess){
  // print the massage to valid number 
  if(guess === randomNumber){
    displayMassage('You guessed right')
    endGame()
  }else if (guess < randomNumber){
    displayMassage('Number is too low')
  }else if(guess > randomNumber){
    displayMassage('Number is too high')
  }
}

function displayGuess(guess){
  // to display guess massage, clean value ,show and update
  userInput.value = '' 
  guessSlot.innerHTML +=`${guess} ,`
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}

function displayMassage (massage){
  // dom interaction 
lowOrHi.innerHTML = `<h2>${massage}</h2>`
  
}

function endGame(){
  // end the game
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id='newGame'> Start New Game</h2>`;
startOver.appendChild(p)
playGame = false
newGame();
}

function newGame(){
  // for start a new game
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
  randomNumber =parseInt(Math.random() * 100+ 1);
  prevGuess = []
  numGuess = 1;
  guessSlot.innerHTML = ''
  remaining.innerHTML= `${11 - numGuess}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame =true
  });
};

```