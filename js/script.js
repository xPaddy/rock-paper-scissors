/**
 * Gets the computer's choice out of "Rock", "Paper" or "Scissors" randomly.
 * @returns the computer's choice
 */
function getComputerChoice() {
  const possibilities = ["Rock", "Paper", "Scissors"];
  const computerChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
  return computerChoice;
}

/**
 * Play one round of the game.
 * @param {string} playerSelection the player's selection stored from a prompt
 * @param {string} cmputerSelection the computer's selection got from the getComputerChoice function
 */
function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      result = "You lose! Paper beats Rock.";
    } else {
      result = "You win! Rock beats Scissors.";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      result = "You win! Paper beats Rock.";
    } else {
      result = "You lose! Scissors beat Paper.";
    }
  } else if (computerSelection === "Rock") {
    result = "You lose! Rock beats Scissors.";
  } else {
    result = "You win! Scissors beat Paper.";
  }
  return result;
}
