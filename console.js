function getComputerChoice() {
    let randomNumber;
    let computerChoice;
    randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else if (randomNumber === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "Error. Try again later.";
    }
    return computerChoice;
}

function getPlayerSelection() {
    let playerChoice = prompt("Enter your choice of Rock, Paper or Scissors: ", "RocK");
    if(playerChoice == null) {
        playerChoice = "cancelled";
    } else {
        playerChoice = playerChoice.toLowerCase();
        if(!((playerChoice === "rock") || (playerChoice === "paper") || (playerChoice === "scissors"))) {
            playerChoice ="invalidInput";
        }
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "Cancelled") {
        console.log("You have cancelled the action. To play the game again reload the page and enter either Rock, Paper or Scissors.");
    } else if (playerSelection == "InvalidInput") {
        console.log("You have entered an invalid prompt. To play the game reload the page and enter either Rock, Paper or Scissors.")
    } else {
        console.log("Player selection is: "+playerSelection+".");
        console.log("Computer selection is: "+computerSelection+".");
        switch(true) {
            case (playerSelection === computerSelection) :
                console.log("Draw!");
                break;
    
            case (
                (playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Paper" && computerSelection === "Rock") ||
                (playerSelection === "Scissors" && computerSelection === "Paper")
                ) :
                console.log("You win! "+playerSelection+" beats "+computerSelection+".");
                break;
            
            case (
                (playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Rock")
                ) :
                console.log("You lose! "+computerSelection+" beats "+playerSelection+".");
                break;
            default : console.log("Error, please try again!");
        }
    }
}

function firstLetterToUpperCase(input) {
    input = input.charAt(0).toUpperCase() + input.slice(1);
    return input;
}

let playerSelection = getPlayerSelection();
let computerSelection = getComputerChoice();
playerSelection = firstLetterToUpperCase(playerSelection);
computerSelection = firstLetterToUpperCase(computerSelection);

playRound(playerSelection, computerSelection);