// sets the score for human and computer to 0
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let roundWinner, gameWinner;

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

//Event listeners for human choices
rock.addEventListener("click", () => playGame("rock"));

paper.addEventListener("click", () => playGame("paper"));

scissors.addEventListener("click", () => playGame("scissors"));

playAgainButton.addEventListener("click", () => resetGame());

//Function that hide and show a modal by changing css class
function popUpModal() {
  playAgainModal.classList.remove("hide");
  playAgainModal.classList.add("show");
}

//Function that revert the GUI to initial value
function resetGame() {
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

//Function that disable human choices buttons
function disableChoicesButton() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

//Function that convert the text choice to emoji
function convertToEmoji(choice) {
  if (choice == "rock") {
    return "👊🏻";
  } else if (choice == "paper") {
    return "✋🏻";
  } else {
    return "✌🏻";
  }
}

//Function that converts the first lettter of the word to uppercase
function upperCaseFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

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
    roundWinner = "human";
    updateGui(humanChoice, computerChoice, roundWinner);
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    roundWinner = "computer";
    updateGui(humanChoice, computerChoice, roundWinner);
  } else {
    roundWinner = "tie";
    updateGui(humanChoice, computerChoice, roundWinner);
  }

  if (humanScore == 5) {
    finalResult.innerText = `You won!`;
    disableChoicesButton();
    popUpModal();
  }

  if (computerScore == 5) {
    finalResult.innerText = `You lose!`;
    disableChoicesButton();
    popUpModal();
  }
}

//Function that update the GUI based on the choices
function updateGui(humanChoice, computerChoice, roundWinner) {
  guiHumanChoice.textContent = `${convertToEmoji(humanChoice)}`;
  guiComputerChoice.textContent = `${convertToEmoji(computerChoice)}`;
  guiRoundNumber.textContent = `Round ${++roundNumber}`;

  if (roundWinner === "human") {
    guiHumanScore.textContent = `${++humanScore}`;
    guiComputerScore.textContent = `${computerScore}`;
    gameMessage.innerHTML = `You win!<br>${upperCaseFirstLetter(
      humanChoice
    )} beats ${upperCaseFirstLetter(computerChoice)}`;
  } else if (roundWinner === "computer") {
    guiHumanScore.textContent = `${humanScore}`;
    guiComputerScore.textContent = `${++computerScore}`;
    gameMessage.innerHTML = `You lose!<br>${upperCaseFirstLetter(
      computerChoice
    )} beats ${upperCaseFirstLetter(humanChoice)}`;
  } else {
    guiHumanScore.textContent = `${humanScore}`;
    guiComputerScore.textContent = `${computerScore}`;
    gameMessage.innerHTML = "It's a tie!";
  }
}

//Function that runs the game by calling other functions
function playGame(input) {
  const humanSelection = input;
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
