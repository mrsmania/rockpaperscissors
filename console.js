const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let lastResult = document.getElementById('lastResult');
let lastPlayerSelection = document.getElementById('playerSelection');
let lastComputerSelection = document.getElementById('computerSelection');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playBtns = document.getElementsByClassName('playBtn');
const resetBtn = document.getElementById('reset');
resetBtn.style.display = "none";

let playerCounter = 0;
let computerCounter = 0;

function playRound(playerSelection, computerSelection) {
    let roundResult;

    lastPlayerSelection.textContent = "Player selection is: " + playerSelection + ".";
    lastComputerSelection.textContent = "Computer selection is: " + computerSelection + ".";

    switch (true) {
        case (playerSelection === computerSelection):
            lastResult.textContent = "It's a tie!";
            roundResult = "tie";
            break;

        case (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ):
            lastResult.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";
            playerCounter++;
            roundResult = "playerWins";
            break;
        case (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
        ):
            lastResult.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
            computerCounter++;
            roundResult = "computerWins";
            break;
        default:
            roundResult = "error";
            lastResult.textContent = "Error, please try again!";
    }
    computerScore.textContent = computerCounter;
    playerScore.textContent = playerCounter;
    if ((computerCounter >= 5) || (playerCounter >= 5)) {
        Array.from(playBtns).forEach((playBtn) => {
            playBtn.style.display = "none";
        });
        if (playerCounter == 5) {
            lastResult.textContent = "WINNER!!!";
        } else {
            lastResult.textContent = "LOSER!!!";
        }
        resetBtn.style.display = "block";
        resetBtn.addEventListener('click', reset);
    }
}

function reset() {
    Array.from(playBtns).forEach((playBtn) => {
        playBtn.style.display = "inline-block";
    });
    computerCounter=0;
    playerCounter=0;
    playerSelection.textContent="";
    computerSelection.textContent="";
    lastResult.textContent="No round played yet, ready!";
    computerScore.textContent="0";
    playerScore.textContent="0";
    resetBtn.style.display="none";
}

function getComputerChoice() {
    let randomNumber;
    let getComputerChoice;
    randomNumber = Math.floor(Math.random() * 3);

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

rock.addEventListener('click', () => {
    const playerChoice = "rock";
    playRound(playerChoice, getComputerChoice());
});

paper.addEventListener('click', () => {
    const playerChoice = "paper";
    playRound(playerChoice, getComputerChoice());
});

scissors.addEventListener('click', () => {
    const playerChoice = "scissors";
    playRound(playerChoice, getComputerChoice());
});