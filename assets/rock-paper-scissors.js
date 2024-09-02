// sets the score for human and computer to 0 (global scope variable)
let humanScore = 0;
let computerScore = 0;

// function for the player or human that converts the input to lowercase
// function getHumanChoice(humanInput) {
//   humanInput = humanInput.toLowerCase();
//   while (
//     humanInput !== "rock" &&
//     humanInput !== "paper" &&
//     humanInput !== "scissors"
//   ) {
//     console.log("Please enter a valid option!");
//     humanInput = prompt(`What will you choose?\n- Rock\n- Paper\n- Scissors`);
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
    return console.log(
      `You win!\n${humanChoice} beats ${computerChoice}\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`
    );
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    return console.log(
      `You lose!\n${computerChoice} beats ${humanChoice}\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`
    );
  } else {
    return console.log(
      `It's a tie!\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${humanScore}\nComputer: ${computerScore}`
    );
  }
}

function playGame(input) {
  // get the input of the player
  // let humanInput = prompt(`What will you choose?\n- Rock\n- Paper\n- Scissors`);

  // assigning the functions' output into a variable
  // const humanSelection = getHumanChoice(input);
  const humanSelection = input;
  const computerSelection = getComputerChoice();

  return playRound(humanSelection, computerSelection);
}

// // loop that will repeat the in 5 rounds
// for (round = 1; round <= 5; round++) {
//   playGame();
// }

// conditional statement that will display who won the game based on the score
// if (humanScore > computerScore) {
//   console.log(
//     `You won the game!\n\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`
//   );
// } else if (computerScore > humanScore) {
//   console.log(
//     `The computer won the game!\n\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`
//   );
// } else if (humanScore == computerScore) {
//   console.log(
//     `It's a tie\n\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`
//   );
// } else {
//   console.log("Something is not right");
// }

//DOM elements for GUI
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector(".round-result");

rock.addEventListener("click", () => {
  input = "rock";
  playGame(input);
});

paper.addEventListener("click", () => {
  input = "paper";
  playRound(input);
});

scissors.addEventListener("click", () => {
  input = "scissors";
  playRound(input);
});

// function clickHandler(btnInput) {
//   testMessage(btnInput);
// }

function testMessage(input) {
  alert(input);
}
