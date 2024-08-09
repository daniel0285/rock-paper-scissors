// sets the score for human and computer to 0 (global scope variable)
let humanScore = 0;
let computerScore = 0;

function playGame() {
  // get the input of the player
  let humanInput = prompt(`What will you choose?\n- Rock\n- Paper\n- Scissors`);

  // function for the player or human that converts the input to lowercase
  function getHumanChoice(humanInput) {
    humanInput = humanInput.toLowerCase();
    while (humanInput !== "rock" && humanInput !== "paper" && humanInput !== "scissors"){
      alert("Please enter a valid option!");
      humanInput = prompt(`What will you choose?\n- Rock\n- Paper\n- Scissors`);
      if(humanInput == "rock" && humanInput == "paper" && humanInput == "scissors"){roundNumber++};
    }
    return humanInput;
  }

  // assigning the functions' output into a variable
  const humanSelection = getHumanChoice(humanInput);
  const computerSelection = getComputerChoice();

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
    if (humanChoice == "rock" && computerChoice == "scissors") {
      return alert(
        `You win!\nRock beats Scissors\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`
      );
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      return alert(
        `You lose!\nPaper beats Rock\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`
      );
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      return alert(
        `You lose!\nScissors beats Paper\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`
      );
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      return alert(
        `You win!\nPaper beats Rock\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`
      );
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      return alert(
        `You win!\nScissors beats Paper\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`
      );
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      return alert(
        `You lose!\nRock beats Scissors\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`
      );
    } else {
      return alert(
        `It's a tie!\n\nYou: ${humanChoice.toUpperCase()}\nComputer: ${computerChoice.toUpperCase()}\n\n(Score)\nYou: ${humanScore}\nComputer: ${computerScore}`
      );
    }
  }
  return playRound(humanSelection, computerSelection);
}

// loop that will repeat the round until one of the players reach 5 points
for (round = 1; round <= 5; round++) {
  playGame();
}

// conditional statement that will display who won the game
if (humanScore > computerScore) {
  alert(`You won the game!\n\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
} else if (computerScore > humanScore) {
  alert(`The computer won the game!\n\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
} else if (humanScore == computerScore){
  alert(`It's a tie\n\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
} else {
  alert("Something is not right");
}
