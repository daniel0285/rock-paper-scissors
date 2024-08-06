let humanScore = 0;
let computerScore = 0;

let humanInput = prompt("What will you choose?\n- Rock\n- Paper\n- Scissors");

function getComputerChoice(){
  let computer = Math.floor(Math.random() * 3) + 1;

  if (computer === 3){
    return "rock";
  } else if (computer === 1){
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(humanInput){
  return humanInput.toLowerCase();
}

function playRound(humanChoice, computerChoice){

    // console.log(humanChoice);
    // console.log(computerChoice);
  if (humanChoice == "rock" && computerChoice == "scissors"){
    return `You win!\nRock beats Scissors\n\nYou: ${humanChoice}\nComputer: ${computerChoice}`;
  } else if (humanChoice == "rock" && computerChoice == "paper"){
    return `You lose!\nPaper beats Rock\n\nYou: ${humanChoice}\nComputer: ${computerChoice}`;
  } else if (humanChoice == "paper" && computerChoice == "scissors"){
    return `You lose!\nScissors beats Paper\n\nYou: ${humanChoice}\nComputer: ${computerChoice}`;
  } else if (humanChoice == "paper" && computerChoice == "rock"){
    return `You win!\nPaper beats Rock\n\nYou: ${humanChoice}\nComputer: ${computerChoice}`;
  } else if (humanChoice == "scissors" && computerChoice == "paper"){
    return `You win!\nScissors beats Paper\n\nYou: ${humanChoice}\nComputer: ${computerChoice}`;
  } else if (humanChoice == "scissors" && computerChoice == "rock"){
    return `You lose!\nRock beats Scissors\n\nYou: ${humanChoice}\nComputer: ${computerChoice}`;
  } else {
    return `It's a tie!\n\nYou: ${humanChoice}\nComputer: ${computerChoice}`;
  } 
}

let humanSelection = getHumanChoice(humanInput);
let computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

// console.log("Human: " + getHumanChoice(humanInput));
// console.log("Computer: " + getComputerChoice());

