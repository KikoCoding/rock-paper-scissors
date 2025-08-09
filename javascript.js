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

function getHumanChoice(){
    let promptAnswer = prompt("What will you choose? Rock, paper or scissors?").toLowerCase();
    if(promptAnswer == "rock"){
        let humanChoice = 0;
    }
    else if(promptAnswer == "paper"){
        let humanChoice = 1;
    }
    else if(promptAnswer == "scissors")
    {
        let humanChoice = 2;
    }
    return promptAnswer;
}

function playRound(humanChoice, computerChoice) {
    // If the human won...
    if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
    } 
    // If there was a tie...
    else if(humanChoice == computerChoice){
        console.log(`Tie! Both chose ${humanChoice}.`)
    }
    // If the computer won...
    else{
        console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
    }
}

function playGame(){

    // Play 5 rounds

    for(let i = 0; i < 5; i++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Reset the scores

    computerScore = 0;
    humanScore = 0;
}

let computerScore = 0;
let humanScore = 0;

playGame();