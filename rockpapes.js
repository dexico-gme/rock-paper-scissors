// function to randomly choose rock, paper or scissors
let getComputerChoice = function () {
  let arr = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum];
};
getComputerChoice();

let playerCount = 0;
let computerCount = 0;

// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  //console.log(computerSelection);
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `You Win! ${playerSelection} beats ${computerSelection} \nThe winner is player`
    );
    playerCount += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `You Win! ${playerSelection} beats ${computerSelection} \nThe winner is player`
    );
    playerCount += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `You Win! ${playerSelection} beats ${computerSelection} \nThe winner is player`
    );
    playerCount += 1;
  } else if (playerSelection === computerSelection) {
    console.log(`It's a draw!`);
  } else {
    console.log(
      `You Lose! ${computerSelection} beats ${playerSelection} \nThe winner is computer`
    );
    computerCount += 1;
  }
}

let playerSelection = prompt("user input: ").toLowerCase();
let computerSelection = getComputerChoice();

// playRound(playerSelection, computerSelection);

function game() {
  for (x = 1; x <= 5; x++) {
    console.log(`Round: ${x}`);
    playRound(playerSelection, getComputerChoice());
  }
}

game();
declareWinner();

function declareWinner() {
  if (playerCount > computerCount) {
    console.log(`Player: ${playerCount} | Computer: ${computerCount}`);
    console.log("Player wins!");
  } else if (playerCount < computerCount) {
    console.log(`Player: ${playerCount} | Computer: ${computerCount}`);
    console.log("Computer wins!");
  } else {
    console.log(`Player: ${playerCount} | Computer: ${computerCount}`);
    console.log(`It's a draw!`);
  }
}

//   }
// }

// rock beats scissors
// scissors beats paper
// paper beats rock
