const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You WIn!!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You Lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissor") {
        result = 'You WIn!!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You Lose!'
    }
    if (computerChoice === 'scissor' && userChoice === "rock") {
        result = 'You WIn!!'
    }
    if (computerChoice === 'scissor' && userChoice === "paper") {
        result = 'You Lose!!'
    }
    resultDisplay.innerHTML = result
}