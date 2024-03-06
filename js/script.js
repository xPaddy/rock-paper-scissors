/**
 * Gets the computer's choice out of "Rock", "Paper" or "Scissors" randomly.
 * @returns the computer's choice
 */
function getComputerChoice() {
   const possibilities = ["Rock", "Paper", "Scissors"];
   const computerChoice = Math.floor(Math.random() * possibilities.length);
   return computerChoice;
}

/**
 * Play one round of the game.
 * @param {*} playerSelection the player's selection stored from a prompt
 * @param {*} cmputerSelection the computer's selection got from the getComputerChoice function
 */
function playRound(playerSelection, cmputerSelection) {
   
}