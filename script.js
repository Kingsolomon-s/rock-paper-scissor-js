// document.body.style["backgroundColor"] = "#0D0D0D";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "ROCK";
  } else if (randomNumber === 1) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

function getHumanChoice(choice) {
  let userChoice = choice.toUpperCase();
  if (userChoice === "ROCK") {
    return "ROCK";
  } else if (userChoice === "PAPER") {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

let roundPlayed = 0;
let maxRound = 5;

function handleClick(e) {
  if (roundPlayed >= maxRound) {
    return;
  }

  const rawChoice = e.target.dataset.choice;
  let humanChoice = getHumanChoice(rawChoice);
  let computerChoice = getComputerChoice();
  if (roundPlayed < maxRound) {
    const result = playRound(humanChoice, computerChoice);
    if (result !== "DRAW") {
      roundPlayed++;
      console.log(`Round completed: ${roundPlayed} of ${maxRound}`);
    }
  }
  if (roundPlayed === maxRound) {
    console.log("Game over! Final scores:");
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    showScore();
    setTimeout(() => {
      displayWinner();
    }, 100);
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

let humanScore = 0;
let computerScore = 0;

let humanScorePara = document.createElement("p");
let computerScorePara = document.createElement("p");

humanScorePara.classList.toggle("human");
computerScorePara.classList.toggle("computer");
// console.log(humanScorePara.classList);

const score = document.querySelector(".score");
score.appendChild(humanScorePara);
score.appendChild(computerScorePara);

const drawPara = document.createElement("p");
drawPara.classList.toggle("draw-para");
const container = document.querySelector(".container");
container.appendChild(drawPara);

function updateScore() {
  humanScorePara.textContent = humanScore;
  computerScorePara.textContent = computerScore;
}
//REMEMBER IM TRYING TO MAKE THE DRAWPAPRA DISAPPEAR AFTER IT HAS RUN
function announceDraw() {
  drawPara.textContent = "It's a draw!  Choose again.";
}

function updateHumanScore() {
  humanScore++;
  updateScore();
}

function updateComputerScore() {
  computerScore++;
  updateScore();
}

function removeDrawPara() {
  drawPara.textContent = "";
}

function playRound(humanChoice, computerChoice) {
  console.log(`\nROUND  ${roundPlayed + 1}: `);
  if (humanChoice === computerChoice) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("It's a DRAW FOR THIS ROUND!");
    removeDrawPara();
    announceDraw();
    return "DRAW";
  } else if (
    (humanChoice === "ROCK" && computerChoice === "PAPER") ||
    (humanChoice === "PAPER" && computerChoice === "SCISSOR") ||
    (humanChoice === "SCISSOR" && computerChoice === "ROCK")
  ) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("YOU LOST THE ROUND!");
    removeDrawPara();
    updateComputerScore();
    return "COMPUTER";
  } else {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("YOU WON THE ROUND!");
    removeDrawPara();
    updateHumanScore();
    return "HUMAN";
  }
  showScore();
}

function showScore() {
  let score;
  score = `OPP score: ${computerScore}\nYour score: ${humanScore}`;
  console.log(score);
}

let totalScore;
function showTotalScore() {
  totalScore = console.log(
    `\nTotal Score: \n\nOPP Total Score: ${computerScore} \n\nYour Total Score: ${humanScore}`
  );
}

function displayWinner() {
  container.style.display = "none";
  // document.body.textContent = "";
  // document.body.style["backgroundColor"] = "#0D0D0D";
  // document.body.style["color"] = "whitesmoke";
  const resultDivContainer = document.createElement("div");
  resultDivContainer.classList.toggle("final-result-container");
  document.body.appendChild(resultDivContainer);

  const resultDiv = document.createElement("div");
  resultDiv.classList.toggle("final-result");

  let message = "";
  if (computerScore > humanScore) {
    message = "OH NO!, YOU LOST UNFORTUNATELY, YOU HAVE TO GO HARDER";
  } else if (humanScore > computerScore) {
    message = "CONGRATULATIONS! YOU WON";
  } else {
    message = "A TIE, WANNA GIVE IT ANOTHER TRY?";
  }

  console.log(`Winner message: "${message}"`);

  resultDiv.textContent = message;
  resultDivContainer.appendChild(resultDiv);

  const resetBtn = document.createElement("button");
  resetBtn.classList.toggle("reset-button");
  resetBtn.textContent = "Play Again";
  resetBtn.addEventListener("click", resetGame);

  resultDivContainer.appendChild(resetBtn);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  totalScore = 0;
  roundPlayed = 0;
  updateScore();

  const resultDivContainer = document.querySelector(".final-result-container");

  if (resultDivContainer) {
    // resultDivContainer.style.display = "none";
    resultDivContainer.remove();
    container.style.display = "block";
  }
}
