// function to randomly choose rock, paper or scissors
let getComputerChoice = function () {
  let arr = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum];
};
getComputerChoice();

// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  //console.log(computerSelection);
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log(`It's a draw!`);
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

let playerSelection = prompt("user input: ").toLowerCase();
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

// rock beats scissors
// scissors beats paper
// paper beats rock
