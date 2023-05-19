let getComputerChoice = function () {
  let arr = ["Rock", "Paper", "Scissors"];
  let randNum = Math.floor(Math.random() * arr.length);
  console.log(arr[randNum]);
};
getComputerChoice();

function playRound(playerSelection, computerSelection) {
  return `You Lose! ${playerSelection} beats ${computerSelection}`;
}
