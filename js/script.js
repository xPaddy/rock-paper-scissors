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

function getPlayerChoice(round) {
  let playerChoice = "";
  do {
    playerChoice = prompt(
      `Round ${round}: Choose wisely one of Rock, Paper or Scissors:`
		);
		if (playerChoice !== null && playerChoice.length > 1) {
      playerChoice =
        playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase();
    } else if (playerChoice === null) {
      return -1;
    }
  } while (!possibilities.includes(playerChoice));
  return playerChoice;
}

/**
 * Play one round of the game.
 * @param {string} playerSelection the player's selection stored from a prompt
 * @param {string} computerSelection the computer's selection got from the getComputerChoice function
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `${playerSelection} vs. ${computerSelection} - It's a tie!`;
    // return 0;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return `${playerSelection} vs. ${computerSelection} - You win! ${playerSelection} beats ${computerSelection}.`;
    // return 1;
  } else {
    return `${playerSelection} vs. ${computerSelection} - You lose! ${computerSelection} beats ${playerSelection}.`;
    // return -1;
  }
}

/**
 * Play the game.
 */
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1; // current round
  let maxRounds = 5; // maxRounds to play

  let playerChoice;
  let computerChoice = "";
  let result = "";

  while (round <= maxRounds) {
    playerChoice = getPlayerChoice(round);
    if (playerChoice === -1) {
      console.log("Game closed by Player!");
      return;
		}
		
    computerChoice = getComputerChoice();
    console.log((result = playRound(playerChoice, computerChoice)));

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    } else {
      playerScore++;
      computerScore++;
    }
    round++;
  }

  if (playerScore > computerScore) {
    console.log(`The final score is ${playerScore}:${computerScore}. You won!`);
  } else if (computerScore > playerScore) {
    console.log(
      `The final score is ${playerScore}:${computerScore}. You lost!`
    );
  } else {
    console.log(
      `The final score is ${playerScore}:${computerScore}. It's a tie!`
    );
  }
}

playGame();
