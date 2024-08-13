function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice() {
    let computerChoice = getRandomInt(3);
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == "1"){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("What will you choose? Rock, paper or scissors?");
    return humanChoice;
}

let computerScore = 0;
let humanScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());