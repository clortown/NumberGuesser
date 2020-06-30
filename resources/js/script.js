let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random()*10);
}

function compareGuesses(human, computer, target) {
    const compareHuman = Math.abs(human - target);
    // Difference between human's guess and target number
    const compareComputer = Math.abs(computer - target);
    if (compareHuman < compareComputer || compareHuman === compareComputer) {
        return true;
    } else if (compareHuman > compareComputer) {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}

// let humanScore = 0;
// let computerScore = 0;
// let currentRoundNumber = 1;

// const generateTarget = () => {
//   return Math.floor(Math.random() * 10);
// }

// const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
//   const humanDifference = Math.abs(targetGuess - humanGuess)
//   const computerDifference = Math.abs(targetGuess - computerGuess)
//   return humanDifference <= computerDifference;
// }

// const updateScore = winner => {
//   if (winner === 'human') {
//     humanScore++;
//   } else if (winner === 'computer') {
//     computerScore++;
//   }
// }

// const advanceRound = () => currentRoundNumber++;