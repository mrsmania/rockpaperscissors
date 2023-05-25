

function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

function playRound(playerSelection, computerSelection) {
    let roundResult;
    if(playerSelection == "Cancelled") {
        console.log("You have cancelled the action. To play the game again reload the page and enter either Rock, Paper or Scissors.");
    } else if (playerSelection == "InvalidInput") {
        console.log("You have entered an invalid prompt. To play the game reload the page and enter either Rock, Paper or Scissors.")
    } else {
        console.log("Player selection is: "+playerSelection+".");
        console.log("Computer selection is: "+computerSelection+".");
        switch(true) {
            case (playerSelection === computerSelection) :
                //console.log("It's a tie!");
                //break;
                roundResult = "tie";
                break;
    
            case (
                (playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Paper" && computerSelection === "Rock") ||
                (playerSelection === "Scissors" && computerSelection === "Paper")
                ) :
                //console.log("You win! "+playerSelection+" beats "+computerSelection+".");
                //break;
                roundResult = "playerWins";
                break;
            case (
                (playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Rock")
                ) :
                //console.log("You lose! "+computerSelection+" beats "+playerSelection+".");
                //break;
                roundResult = "computerWins";
                break;
            default : 
                roundResult = "error";
                //console.log("Error, please try again!");
        }
        return roundResult;
    }
}

function getComputerChoice() {
    let randomNumber;
    let getComputerChoice;
    randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0) {
        getComputerChoice = "rock";
    } else if (randomNumber === 1) {
        getComputerChoice = "paper";
    } else if (randomNumber === 2) {
        getComputerChoice = "scissors";
    } else {
        getComputerChoice = "Error. Try again later.";
    }
    return getComputerChoice;
}

function getPlayerChoice() {
    let getPlayerChoice = prompt("Enter your choice of Rock, Paper or Scissors: ", "RocK");
    if(getPlayerChoice == null) {
        getPlayerChoice = "cancelled";
    } else {
        getPlayerChoice = getPlayerChoice.toLowerCase();
        if(!((getPlayerChoice === "rock") || (getPlayerChoice === "paper") || (getPlayerChoice === "scissors"))) {
            getPlayerChoice ="invalidInput";
        }
    }
    return getPlayerChoice;
}

function playGame() {
    let playerCounter = 0;
    let computerCounter = 0;
    let i = 1;
    while((playerCounter < 5) && (computerCounter < 5)) {

        let playerChoice = capitalizeFirstLetter(getPlayerChoice());
        let computerChoice = capitalizeFirstLetter(getComputerChoice());
    
        console.log("Round "+i+", FIGHT!");
        let roundResult = playRound(playerChoice, computerChoice);
        if (roundResult == "tie") {
            console.log("It's a tie!");
        } else if(roundResult == "playerWins") {
            console.log("You win!");
            playerCounter++;
        } else if (roundResult == "computerWins") {
            console.log("You lose!");
            computerCounter++;
        } else  {
            console.log("Error, please try again later.");
        }
        console.log("Player: "+playerCounter+":"+computerCounter+" Computer.");
        console.log("");
        i++;
    }
    if(playerCounter == 5) {
        console.log("Woohoo, that's a WIN!");
    } else  if (computerCounter == 5){
        console.log("Oh no, that's a LOSS");
    }
}

playGame();