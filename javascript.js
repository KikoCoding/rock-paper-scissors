let computerScore = 0;
let humanScore = 0;
let tieCount = 0;

const scoreboard = document.createElement("div");
scoreboard.classList.add('scoreboard');

const message = document.createElement('p');
message.classList.add('game-result');

const score = document.createElement("p");
score.classList.add('score');

const gameUI = document.querySelector('#gameUI');

const body = document.querySelector("body");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice() {
    let computerChoice = getRandomInt(3);
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    // If the human won...
    if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        message.style["color"] = "green";
        humanScore += 1;
    } 
    // If there was a tie...
    else if(humanChoice == computerChoice){
        message.textContent = `Tie! Both chose ${humanChoice}.`
        message.style["color"] = "black";
        tieCount += 1;
    }
    // If the computer won...
    else{
        message.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`
        message.style["color"] = "red";
        computerScore += 1;
    }
}

gameUI.addEventListener('click', (e) => {

    switch(e.target.id){
        case 'rock': playRound('rock', getComputerChoice()); break;
        case 'paper': playRound('paper', getComputerChoice()); break;
        case 'scissors': playRound('scissors', getComputerChoice()); break;
    }

    score.textContent = `Your score: ${humanScore} | Computer score : ${computerScore} | Ties: ${tieCount}`;
})

body.appendChild(scoreboard);
scoreboard.appendChild(message);
scoreboard.appendChild(score);