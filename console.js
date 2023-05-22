function getComputerChoice() {
    let randomNumber;
    let choice;
    randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0) {
        choice = "ROCK";
    } else if (randomNumber === 1) {
        choice = "PAPER";
    } else if (randomNumber === 2) {
        choice = "SCISSORS";
    } else {
        choice = "Error. Try again later.";
    }
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {

    switch(true) {
        case (playerSelection === computerSelection) :
            return "Draw!";
            break;

        case (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")
            ) :
            return "You win! "+playerSelection+" beats "+computerSelection+".";
            break;
        
        case (
            (playerSelection === "Rock" && computerSelection === "Paper") ||
            (playerSelection === "Paper" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Rock")
            ) :
            return "You lose! "+computerSelection+" beats "+playerSelection+".";
            break;
        default : return "Error, please try again later!";
    }
}


let playerSelection = "rock";
let computerSelection = getComputerChoice();

playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

console.log("Player selection ist: "+playerSelection);
console.log("Computer selection ist: "+computerSelection);
console.log(playRound(playerSelection, computerSelection));