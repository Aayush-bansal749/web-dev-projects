let random = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const remain = document.querySelector('.lastResult')
const start =  document.querySelector('.resultParas')
const hilo = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prev = []
let numguess = 1

let playgame = true

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(input.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter valid number')
  }else if (guess>100){
    alert('please enter number less than 100')
  }else if(guess<1){
    alert('please enter number more than 1')
  }else{
    checkGuess(guess)
    }
  }
  


function checkGuess(guess){
  if(guess === random){
    displayMessage('You guessed it right')
    endGame()
  }else if(guess > random){
    displayMessage('the number is high')
  } else if(guess< random){
    displayMessage('the number is low')
  } cleanGuess(guess)
  if(numguess === 11){
     
      displayMessage(`Game Over. Random number was ${random}`)
      endGame()
  }
}

function displayMessage(message){
  hilo.innerHTML= `<h2>${message}</h2>`
}

function cleanGuess(guess){
  input.value = ''
  guesses.innerHTML += `${guess} `
  numguess++
  remain.innerHTML = `${11-numguess}`
  
}

function endGame(){
  input.value = ''
  input.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame" >Start New Game</h2>`
  start.appendChild(p)
  playgame= false
  newGame()
}

function newGame(){
  const newGameButton= document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prev = []
    numguess = 1
    guesses.innerHTML = ''
    displayMessage('')
    remain.innerHTML = `${11 - numguess} `
    input.removeAttribute('disabled')
    start.removeChild(p)
    playgame = true
    
})
}