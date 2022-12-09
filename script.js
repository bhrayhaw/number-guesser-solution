let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  if (userGuess >= 0 && userGuess <= 9) {
    const correctHumanGuess = getAbsoluteDistance(secretNumber, userGuess);
    const correctComputerGuess = getAbsoluteDistance(
      secretNumber,
      computerGuess
    );
    return correctHumanGuess <= correctComputerGuess;
  } else {
    alert("Your input is out of range");
  }
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  }
  if (winner === "computer") {
    computerScore += 1;
  }
  return winner
};

const advanceRound = () => {
  return currentRoundNumber ++;
};

generateTarget();
compareGuesses();
console.log(advanceRound());
console.log(updateScore());
