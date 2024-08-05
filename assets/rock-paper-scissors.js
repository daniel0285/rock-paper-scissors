let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 3) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    } 
} 

function getHumanChoice() {
    let humanInput = prompt("What will you choose?\n- Rock\n- Paper\n- Scissors");
    let humanChoice = humanInput.toLowerCase();
    return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());

