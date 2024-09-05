// sets the score for human and computer to 0 (global scope variable)
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let maxScore = 5;

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
    guiHumanChoice.textContent = `${convertToEmoji(humanChoice)}`;
    guiComputerChoice.textContent = `${convertToEmoji(computerChoice)}`;
    guiHumanScore.textContent = `${++humanScore}`;
    guiComputerScore.textContent = `${computerScore}`;
    guiRoundNumber.textContent = `Round ${++roundNumber}`;
    gameMessage.innerHTML = `You win!<br>${upperCaseFirstLetter(
      humanChoice
    )} beats ${upperCaseFirstLetter(computerChoice)}`;
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    guiHumanChoice.textContent = `${convertToEmoji(humanChoice)}`;
    guiComputerChoice.textContent = `${convertToEmoji(computerChoice)}`;
    guiHumanScore.textContent = `${humanScore}`;
    guiComputerScore.textContent = `${++computerScore}`;
    guiRoundNumber.textContent = `Round ${++roundNumber}`;
    gameMessage.innerHTML = `You lose!<br>${upperCaseFirstLetter(
      computerChoice
    )} beats ${upperCaseFirstLetter(humanChoice)}`;
  } else {
    guiHumanChoice.textContent = `${convertToEmoji(humanChoice)}`;
    guiComputerChoice.textContent = `${convertToEmoji(computerChoice)}`;
    guiHumanScore.textContent = `${humanScore}`;
    guiComputerScore.textContent = `${computerScore}`;
    guiRoundNumber.textContent = `Round ${++roundNumber}`;
    gameMessage.innerHTML = "It's a tie!";
    ++tiedRounds;
  }

  if (humanScore == 5) {
    finalResult.innerText = `You won!`;
    disableButton();
    popUpModal();
  }

  if (computerScore == 5) {
    finalResult.innerText = `You lose!`;
    disableButton();
    popUpModal();
  }
}

function playGame(input) {
  const humanSelection = input;
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

//DOM elements for GUI
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const guiRoundNumber = document.getElementById("round-number");
const gameMessage = document.getElementById("game-message");
const guiHumanChoice = document.getElementById("human-choice");
const guiComputerChoice = document.getElementById("computer-choice");
const guiHumanScore = document.getElementById("human-score");
const guiComputerScore = document.getElementById("computer-score");
const playAgainModal = document.getElementById("play-again-modal");
const finalResult = document.getElementById("final-result");
const playAgainButton = document.getElementById("play-again-button");
const roundScoreBoard = document.getElementById("round-score-board");

rock.addEventListener("click", () => playGame("rock"));

paper.addEventListener("click", () => playGame("paper"));

scissors.addEventListener("click", () => playGame("scissors"));

playAgainButton.addEventListener("click", () => tryAgain());

function popUpModal() {
  playAgainModal.classList.remove("hide");
  playAgainModal.classList.add("show");
}

function tryAgain() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;

  humanScore = 0;
  computerScore = 0;
  roundNumber = 0;

  guiHumanChoice.textContent = "❔";
  guiComputerChoice.textContent = "❔";
  guiHumanScore.textContent = "0";
  guiComputerScore.textContent = "0";
  guiRoundNumber.textContent = "Round 0";
  gameMessage.innerHTML = "Ready to Play?<br>Make Your Move!";
  playAgainModal.classList.add("hide");
  playAgainModal.classList.remove("show");
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
