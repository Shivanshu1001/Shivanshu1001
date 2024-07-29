let rand = parseInt(Math.random()*100 +1)
console.log(rand)

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess)
        
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("please enter a valid number")
    }
     else if(guess < 1) {
        alert("please enter a number greater than 1")
    }
    else if(guess > 100) {
        alert("please enter a number less than 100")
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 10) {
            displayGuess(guess)
            displayMessage(`game over, Random number was ${rand}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === rand) {
        displayMessage("you nailed it!")
        endGame();
    }
    else if(guess > rand) {
        displayMessage("number is too high")
    }
    else {
        displayMessage("number is too low")
    }
}

function displayGuess(guess) {  // clean karega
    userInput.value = ' '
    guessSlot.innerHTML +=  `${guess},    `
    numGuess++;
    remaining.innerHTML =  `${11 - numGuess}`
}

function displayMessage(message) {  // all dom manipulations
    lowOrHigh.innerHTML = `<h2> ${message}</h2>`
}

function endGame() {
    userInput.value = ' '
    userInput.setAttribute('disabled' , '')
    p.classList.add('button') 
    p.innerHTML = '<button id = "newGame">New Game</button>'
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
     const newGameButton = document.querySelector("#newGame")
     newGameButton.addEventListener("click", function() {
        rand = parseInt(Math.random()*100 +1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ' '
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;

     })
}

// function getRandomColor() {
//     let val1 = Math.ceil(0 + (255-0) * Math.random());
//     console.log(val1);
//     let val2 = Math.ceil(0 + (255-0) * Math.random());
//     let val3 = Math.ceil(0 + (255-0) * Math.random());

//     return `rgb(${val1}, ${val2}, ${val3})`
// }