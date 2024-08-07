// sets the score for human and computer to 0 (global scope variable)
let humanScore = 0;
let computerScore = 0;

function playGame() {
  while (humanScore !== 5 && computerScore !== 5) {

    // get the input of the player
    let humanInput = prompt(
      "What will you choose?\n- Rock\n- Paper\n- Scissors"
    );

    // function for the player or human that converts the input to lowercase
    function getHumanChoice(humanInput) {
      return humanInput.toLowerCase();
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
        return alert(`You win!\nRock beats Scissors\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`);
      } else if (humanChoice == "rock" && computerChoice == "paper") {
        return alert(`You lose!\nPaper beats Rock\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`);
      } else if (humanChoice == "paper" && computerChoice == "scissors") {
        return alert(`You lose!\nScissors beats Paper\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`);
      } else if (humanChoice == "paper" && computerChoice == "rock") {
        return alert(`You win!\nPaper beats Rock\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`);
      } else if (humanChoice == "scissors" && computerChoice == "paper") {
        return alert(`You win!\nScissors beats Paper\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${++humanScore}\nComputer: ${computerScore}`);
      } else if (humanChoice == "scissors" && computerChoice == "rock") {
        return alert(`You lose!\nRock beats Scissors\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${humanScore}\nComputer: ${++computerScore}`);
      } else {
        return alert(`It's a tie!\n\nYou: ${humanChoice}\nComputer: ${computerChoice}\n\n(Score)\nYou: ${humanScore}\nComputer: ${computerScore}`)  ;
      }
    }
    return playRound(humanSelection, computerSelection);
  }
}

// loop that will repeat the round until one of the players reach 5 points
while (humanScore !== 5 && computerScore !== 5) {
  console.log(playGame());
}

// conditional statement that will display who won the game
if (humanScore == 5) {
  alert("You won the game!");
} else if (computerScore == 5) {
  alert("The computer won the game!");
} else {
  alert("Something is not right");
}
