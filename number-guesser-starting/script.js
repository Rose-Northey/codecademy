let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
    const randomNumber = Math.floor(Math.random()*10)
    return randomNumber
}

const compareGuesses = (humanGuess, computerGuess, target)=>{
    const humanGuessProximity = Math.abs(target - humanGuess)
    const computerGuessProximity = Math.abs(target - computerGuess)
    return humanGuessProximity <= computerGuessProximity? true:false
}

console.log(compareGuesses(6,5,9))