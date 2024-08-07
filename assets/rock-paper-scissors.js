// sets the score for human and computer to 0
let humanScore = 0;
let computerScore = 0;

// get the input of the player
let humanInput = prompt("What will you choose?\n- Rock\n- Paper\n- Scissors");

// assigning the functions' output into a variable
const humanSelection = getHumanChoice(humanInput);
const computerSelection = getComputerChoice();

// function for the computer that gives a random choice
function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3) + 1;

  if (computer === 3) {
    return "rock";
  } else if (computer === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function for the player or human that converts the input to lowercase
function getHumanChoice(humanInput) {
  return humanInput.toLowerCase();
}

  // function that output a message and score based on the choices of the player and computer
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      return `You win!\nRock beats Scissors\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      return `You lose!\nPaper beats Rock\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      return `You lose!\nScissors beats Paper\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      return `You win!\nPaper beats Rock\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      return `You win!\nScissors beats Paper\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      return `You lose!\nRock beats Scissors\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`;
    } else {
      return `It's a tie!\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${humanScore}\nComputer: ${computerScore}`;
    }
  }

playRound(humanSelection, computerSelection);
