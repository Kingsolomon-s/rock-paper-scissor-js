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
let maxRound = 10;

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
    roundAnalysis.textContent = "";

    /* This is used in order to make sure the rounds are completed
    before displayWinner function is called.
  */
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

const score = document.querySelector(".score");
score.appendChild(humanScorePara);
score.appendChild(computerScorePara);

const drawPara = document.createElement("p");
drawPara.classList.toggle("draw-para");

const roundAnalysis = document.createElement("p");
roundAnalysis.classList.toggle("analysis");

const container = document.querySelector(".container");
container.appendChild(drawPara);
container.appendChild(roundAnalysis);

const lobbyContainer = document.querySelector(".lobby-container");

// To set document.body to dark background in CSS
const doc = document.body;
function setDarkTheme() {
  doc.classList.add("dark-theme");
}

// To set document.body to grey background in CSS
function setGameTheme() {
  doc.classList.remove("dark-theme");
  doc.classList.add("game-theme");
}

function lobbyPage() {
  setDarkTheme();
  const playButton = document.querySelector(".play");
  playButton.addEventListener("click", () => {
    lobbyContainer.style.display = "none";
    container.style.display = "block";
    setGameTheme();
  });
}

lobbyPage();

function updateScore() {
  humanScorePara.textContent = humanScore;
  computerScorePara.textContent = computerScore;
}

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
    roundAnalysis.textContent = `Your OPP chose ${computerChoice}\n
    You Chose ${humanChoice}`;
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
    roundAnalysis.textContent = `Your OPP chose ${computerChoice}\n
    You Chose ${humanChoice}\n\nYOU LOST THE ROUND!`;
    removeDrawPara();
    updateComputerScore();
    return "COMPUTER";
  } else {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("YOU WON THE ROUND!");
    roundAnalysis.textContent = `Your OPP chose ${computerChoice}\n
    You Chose ${humanChoice}\n\nYOU WON THE ROUND!`;

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

  // Remember, To set dark-theme as priority in CSS, class "game-theme" is removed
  doc.classList.remove("game-theme");
  setDarkTheme();
  const resultDivContainer = document.createElement("div");
  resultDivContainer.classList.toggle("final-result-container");
  document.body.appendChild(resultDivContainer);

  const resultDiv = document.createElement("div");
  resultDiv.classList.toggle("final-result");

  let message = "";
  if (computerScore > humanScore) {
    message = "YOU LOST! UNFORTUNATELY, YOU HAVE TO GO HARDER";
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
    resultDivContainer.remove();
    container.style.display = "block";
    setGameTheme();
  }
}
