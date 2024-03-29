let lastResult = document.getElementById('lastResult');
let lastPlayerSelection = document.getElementById('playerSelection');
let lastComputerSelection = document.getElementById('computerSelection');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore'); 
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playBtns = document.getElementsByClassName('playBtn');
const resetBtn = document.getElementById('reset');
const scoreBoxPlayer = document.getElementById('scoreBoxPlayer');
const scoreBoxComputer = document.getElementById('scoreBoxComputer');

let playerCounter = 0;
let computerCounter = 0;

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
function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

function playRound(playerSelection, computerSelection) {
    lastPlayerSelection.innerHTML = "<img src='img/" + playerSelection + ".png'>";
    lastComputerSelection.innerHTML = "<img src='img/" + computerSelection + ".png'>";

    switch (true) {
        case (playerSelection === computerSelection):
            lastResult.textContent = "It's a tie!";
            scoreBoxPlayer.style.border = "3px solid #a5826d";
            scoreBoxPlayer.style.backgroundColor="transparent";
            scoreBoxComputer.style.border = "3px solid #a5826d";
            scoreBoxComputer.style.backgroundColor="transparent";
            break;

        case (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ):
            lastResult.textContent = "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + ".";
            scoreBoxPlayer.style.border = "3px solid green";
            scoreBoxPlayer.style.backgroundColor="#90ee90";
            scoreBoxComputer.style.border = "3px solid #a5826d";
            scoreBoxComputer.style.backgroundColor="transparent";
            playerCounter++;
            break;
        case (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
        ):
            lastResult.textContent = "You lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection) + ".";
            scoreBoxPlayer.style.border = "3px solid #a5826d";
            scoreBoxPlayer.style.backgroundColor="transparent";
            scoreBoxComputer.style.border = "3px solid red";
            scoreBoxComputer.style.backgroundColor="#ffcccb";
            computerCounter++;
            break;
        default:
            lastResult.textContent = "Error, please try again!";
    }
    computerScore.textContent = computerCounter;
    playerScore.textContent = playerCounter;
    if ((computerCounter >= 5) || (playerCounter >= 5)) {
        Array.from(playBtns).forEach((playBtn) => {
            playBtn.style.display = "none";
        });
        if (playerCounter == 5) {
            lastResult.textContent = "Yay, you're a winner! 🤩 Press Reset to play again.";
        } else {
            lastResult.textContent = "That's a loss 😔 Press Reset to try again.";
        }
        resetBtn.style.display = "block";
        resetBtn.addEventListener('click', reset);
    }
}

function reset() {
    Array.from(playBtns).forEach((playBtn) => {
        playBtn.style.display = "block";
    });
    computerCounter = 0;
    playerCounter = 0;
    playerSelection.textContent = "?";
    computerSelection.textContent = "?";
    lastResult.textContent = "First to score 5 points wins. Choose your first move!";
    computerScore.textContent = "0";
    playerScore.textContent = "0";
    resetBtn.style.display = "none";
    scoreBoxPlayer.style.border = "3px solid #a5826d";
    scoreBoxPlayer.style.backgroundColor="transparent";
    scoreBoxComputer.style.border = "3px solid #a5826d";
    scoreBoxComputer.style.backgroundColor="transparent";
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
