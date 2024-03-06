const possibilities = ["Rock", "Paper", "Scissors"];

/**
 * Gets the computer's choice out of "Rock", "Paper" or "Scissors" randomly.
 * @returns the computer's choice
 */
function getComputerChoice() {
  const computerChoice =
    possibilities[Math.floor(Math.random() * possibilities.length)];
  return computerChoice;
}

/**
 * Play one round of the game.
 * @param {string} playerSelection the player's selection stored from a prompt
 * @param {string} computerSelection the computer's selection got from the getComputerChoice function
 */
function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() +
    playerSelection.substring(1).toLowerCase();

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
    return 0;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return 1;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return -1;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 5; // rounds to play

  let playerChoice = "";
  let computerChoice = "";
  let result;

  while (rounds > 0) {
    playerChoice = prompt("Choose wisely one of Rock, Paper or Scissors:");
    if (!possibilities.includes(playerChoice)) {
      playerChoice = prompt("This is not a valid choice. Choose again! Rock, Paper or Scissors:");
      continue;
    }
    else {
      computerChoice = getComputerChoice();
      result = playRound(playerChoice, computerChoice);

      if (result === 1) {
        playerScore++;
      } else if (result === -1) {
        computerScore++;
      } else {
        playerScore++;
        computerScore++;
      }
    }
    rounds--;
  }

  if (playerScore > computerScore) {
    console.log(`The final score is ${playerScore}:${computerScore}. You won!`);
  } else if (computerScore > playerScore) {
    console.log(`The final score is ${playerScore}:${computerScore}. You lost!`);
  } else {
    console.log(`The final score is ${playerScore}:${computerScore}. It's a tie!`);
  };
}

playGame();
