// sets the score for human and computer to 0 (global scope variable)
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let maxScore = 5;

// function for the player or human that converts the input to lowercase
// function getHumanChoice(humanInput) {
//   humanInput = humanInput.toLowerCase();
//   while (
//     humanInput !== 'rock' &&
//     humanInput !== 'paper' &&
//     humanInput !== 'scissors'
//   ) {
//     alert('Please enter a valid option!');
//     humanInput = prompt("What will you choose?\n- Rock\n- Paper\n- Scissors");
//   }
//   return humanInput;
// }

// function for the computer that gives a random choice
function getComputerChoice() {
  let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

  if (computerRandomNumber === 3) {
    return "rock";
  } else if (computerRandomNumber === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}

// function that output a message and score based on the choices of the player and computer
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    guiHumanChoice.textContent = `You: ${convertToEmoji(humanChoice)}`;
    guiComputerChoice.textContent = `Computer: ${convertToEmoji(
      computerChoice
    )}`;
    guiHumanScore.textContent = `You: ${++humanScore}`;
    guiComputerScore.textContent = `Computer: ${computerScore}`;
    guiRoundNumber.textContent = `Round ${++roundNumber}`;
    roundResult.textContent = `You win!\n${upperCaseFirstLetter(
      humanChoice
    )} beats ${upperCaseFirstLetter(computerChoice)}`;
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    guiHumanChoice.textContent = `You: ${convertToEmoji(humanChoice)}`;
    guiComputerChoice.textContent = `Computer: ${convertToEmoji(
      computerChoice
    )}`;
    guiHumanScore.textContent = `You: ${humanScore}`;
    guiComputerScore.textContent = `Computer: ${++computerScore}`;
    guiRoundNumber.textContent = `Round ${++roundNumber}`;
    roundResult.textContent = `You lose!\n${upperCaseFirstLetter(
      computerChoice
    )} beats ${upperCaseFirstLetter(humanChoice)}`;
  } else {
    guiHumanChoice.textContent = `You: ${convertToEmoji(humanChoice)}`;
    guiComputerChoice.textContent = `Computer: ${convertToEmoji(
      computerChoice
    )}`;
    guiHumanScore.textContent = `You: ${humanScore}`;
    guiComputerScore.textContent = `Computer: ${computerScore}`;
    guiRoundNumber.textContent = `Round ${++roundNumber}`;
    roundResult.textContent = "It's a tie!";
  }

  if (humanScore == 5) {
    roundResult.textContent = `You won the game in ${roundNumber} rounds!\n\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`;
    disableButton();
    playAgainModal();
  }

  if (computerScore == 5) {
    roundResult.textContent = `The computer won the game ${roundNumber} rounds!\n\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`;
    disableButton();
    playAgain();
  }
}

function playGame(input) {
  const humanSelection = input;
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

//DOM elements for GUI
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const guiRoundNumber = document.querySelector("#round-number");
const roundResult = document.querySelector(".round-result");
const guiHumanChoice = document.querySelector("#human-choice");
const guiComputerChoice = document.querySelector("#computer-choice");
const guiHumanScore = document.querySelector("#human-score");
const guiComputerScore = document.querySelector("#computer-score");
const playAgainModal = document.querySelector("#play-again-modal");
const playAgainButton = document.querySelector("#play-again-button");

rock.addEventListener("click", () => {
  input = "rock";
  playGame(input);
});

paper.addEventListener("click", () => {
  input = "paper";
  playGame(input);
});

scissors.addEventListener("click", () => {
  input = "scissors";
  playGame(input);
});

function testMessage(input) {
  alert(input);
}

function playAgain() {
  playAgainModal.style.display = "block";
}

function disableButton() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

function convertToEmoji(choice) {
  if (choice == "rock") {
    return "👊🏻";
  } else if (choice == "paper") {
    return "✋🏻";
  } else {
    return "✌🏻";
  }
}

function upperCaseFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(document.querySelector("#round-number"));
