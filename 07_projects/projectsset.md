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