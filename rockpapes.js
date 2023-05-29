// function to randomly choose rock, paper or scissors
let getComputerChoice = function () {
  let arr = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum];
};
// getComputerChoice();

let playerCount = 0;
let computerCount = 0;

// elements to be generated when script runs
const container = document.querySelector(".computer-choice");
const content = document.createElement("div");
const newchoice = document.getElementsByClassName(".comp-content");

const computerScreen = document.querySelector(".computer-screen");
const computerIcon = document.createElement("p");
const computerText = document.createElement("p");
const namecont = document.querySelector("#comp-content");

const result = document.querySelector(".result");
const resultp = document.createElement("p");

// add element
// 🤜🏼🫱🏼✌🏼
// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  //console.log(computerSelection);
  if (playerSelection === "rock" && computerSelection === "scissors") {
    computerText.classList.add("comp-text");
    computerText.textContent = "You Win";
    namecont.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    // setTimeout(computerScreen.appendChild(computerText), 50000);
    console.log(
      `You Win! ${playerSelection} beats ${computerSelection} \nThe winner is player`
    );
    playerCount += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    computerText.classList.add("comp-text");
    computerText.textContent = "You Win";
    namecont.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    // setTimeout(computerScreen.appendChild(computerText), 50000);
    console.log(
      `You Win! ${playerSelection} beats ${computerSelection} \nThe winner is player`
    );
    playerCount += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    computerText.classList.add("comp-text");
    computerText.textContent = "You Win";
    namecont.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    // setTimeout(computerScreen.appendChild(computerText), 50000);
    console.log(
      `You Win! ${playerSelection} beats ${computerSelection} \nThe winner is player`
    );
    playerCount += 1;
  } else if (playerSelection === computerSelection) {
    computerText.classList.add("comp-text");
    computerText.textContent = "It's a Draw!";
    namecont.innerHTML = `It's a Draw! ${playerSelection} === ${computerSelection}`;
    // setTimeout(computerScreen.appendChild(computerText), 50000);
    console.log(`It's a draw!`);
    drawCount += 1;
  } else {
    computerText.classList.add("comp-text");
    computerText.textContent = "You Lose!";
    namecont.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
    // setTimeout(computerScreen.appendChild(computerText), 500);
    console.log(
      `You Lose! ${computerSelection} beats ${playerSelection} \nThe winner is computer`
    );
    computerCount += 1;
  }
}

function choiceIcon(choice) {
  if (choice === "rock") {
    // container.appendChild(content);
    computerIcon.classList.add("comp-icon");
    computerIcon.textContent = "🤜🏼";
    computerScreen.appendChild(computerIcon);
  } else if (choice === "paper") {
    // container.appendChild(content);
    computerIcon.classList.add("comp-icon");
    computerIcon.textContent = "🫱🏼";
    computerScreen.appendChild(computerIcon);
  } else {
    // container.appendChild(content);
    computerIcon.classList.add("comp-icon");
    computerIcon.textContent = "✌🏼";
    computerScreen.appendChild(computerIcon);
  }
}

// let playerSelection =

// playRound(playerSelection, computerSelection);

let roundCount = 0;
let drawCount = 0;

// game(playerSelection, choice);
declareWinner();

function declareWinner() {
  if (roundCount === 5) {
    if (drawCount > 0) {
      `${drawCount}`;
    }
    if (playerCount > computerCount) {
      // console.log(`Player: ${playerCount} | Computer: ${computerCount}`);
      // console.log("Player wins!");
      resultp.innerHTML =
        "Results <br>" +
        `Player: ${playerCount} | Computer: ${computerCount} <br>` +
        `Draws: ${drawCount}` +
        "<br><br> Player wins!";
      result.appendChild(resultp);
      computerIcon.textContent = "😄";
      computerIcon.style =
        "font-size: 100px;top: 46px; bottom: auto; filter:grayscale(0)";
    } else if (playerCount < computerCount) {
      // console.log(`Player: ${playerCount} | Computer: ${computerCount}`);
      // console.log("Computer wins!");
      resultp.innerHTML =
        "Results <br>" +
        `Player: ${playerCount} | Computer: ${computerCount} <br>` +
        `Draws: ${drawCount}` +
        "<br><br> Computer wins!";
      result.appendChild(resultp);
      computerIcon.textContent = "👾";
      computerIcon.style =
        "font-size: 100px;top: 46px; bottom: auto; filter:grayscale(0)";
    } else if (playerCount === computerCount) {
      // console.log(`Player: ${playerCount} | Computer: ${computerCount}`);
      // console.log(`It's a draw!`);
      resultp.innerHTML =
        "Results <br>" +
        `Player: ${playerCount} | Computer: ${computerCount} <br>` +
        `Draws: ${drawCount}` +
        "<br><br> It's a Draw!";
      result.appendChild(resultp);
      computerIcon.textContent = "🤯";
      computerIcon.style =
        "font-size: 100px;top: 46px; bottom: auto; filter:grayscale(0)";
    }
    roundCount = 0;
    drawCount = 0;
    playerCount = 0;
    computerCount = 0;
    computerText.textContent = "";
    namecont.innerHTML = "GAME OVER!";
  }
}

// rock beats scissors
// scissors beats paper
// paper beats rock

// functions to run on user input

function rockClick() {
  computerIcon.style = "";
  const playerSelection = "rock";
  console.log(playerSelection);
  let choice = getComputerChoice();
  namecont.innerHTML = `computer picked ${choice}`;
  choiceIcon(choice);
  playRound(playerSelection, choice);

  roundCount += 1;
  console.log(roundCount);

  content.classList.add("content");
  // namecont.innerHTML = `computer picked ${choice}`;

  resultp.textContent = `Round: ${roundCount}`;
  result.appendChild(resultp);

  //reset the game after 5 seconds;
  // setTimeout(() => {
  //   namecont.innerHTML = "PICK ONE";
  // }, 5000);

  choiceIcon(choice);
  declareWinner();
}

function paperClick() {
  computerIcon.style = "";
  const playerSelection = "paper";
  console.log(playerSelection);
  let choice = getComputerChoice();
  namecont.innerHTML = `computer picked ${choice}`;
  choiceIcon(choice);
  playRound(playerSelection, choice);
  content.classList.add("content");
  // namecont.innerHTML = `computer picked ${choice}`;

  roundCount += 1;
  console.log(roundCount);

  resultp.textContent = `Round: ${roundCount}`;
  result.appendChild(resultp);

  // setTimeout(() => {
  //   namecont.innerHTML = "PICK ONE";
  // }, 5000);
  declareWinner();
}

function scissorsClick() {
  computerIcon.style = "";
  const playerSelection = "scissors";
  console.log(playerSelection);
  let choice = getComputerChoice();
  namecont.innerHTML = `computer picked ${choice}`;
  choiceIcon(choice);
  playRound(playerSelection, choice);
  content.classList.add("content");
  // namecont.innerHTML = `computer picked ${choice}`;

  roundCount += 1;
  console.log(roundCount);
  resultp.textContent = `Round: ${roundCount}`;
  result.appendChild(resultp);

  // choiceIcon(choice);
  // setTimeout(() => {
  //   namecont.innerHTML = "PICK ONE";
  // }, 5000);
  declareWinner();
}
