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

function getHumanChoice() {
  let userChoice = prompt(
    "what's your pick? ROCK, PAPER, SCISSOR",
    ""
  ).toUpperCase();
  if (userChoice === "ROCK") {
    return "ROCK";
  } else if (userChoice === "PAPER") {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`\nROUND ${roundPlayed}: `);
  if ((humanChoice === "ROCK") & (computerChoice === "PAPER")) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("YOU LOST THE ROUND!");
    computerScore++;
  } else if ((humanChoice === "PAPER") & (computerChoice === "SCISSOR")) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("YOU LOST THE ROUND!");
    computerScore++;
  } else if ((humanChoice === "SCISSOR") & (computerChoice === "ROCK")) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("YOU LOST THE ROUND!");
    computerScore++;
  } else if (humanChoice === computerChoice) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("It's a DRAW FOR THIS ROUND!");
  } else {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log(`You Chose ${humanChoice}`);
    console.log("YOU WON THE ROUND!");
    humanScore++;
  }
  showScore();
}

let roundPlayed = 1;

function playGame() {
  while (roundPlayed <= 5) {
    playRound(getHumanChoice(), getComputerChoice());
    roundPlayed++;
  }
  showTotalScore();
  displayWinner();
}

playGame();

function showScore() {
  let score;
  score = `OPP score: ${computerScore}\nYour score: ${humanScore}`;
  console.log(score);
}

function showTotalScore() {
  let totalScore;
  totalScore = console.log(
    `\nTotal Score: \n\nOPP Total Score: ${computerScore} \n\nYour Total Score: ${humanScore}`
  );
}

function displayWinner() {
  if (computerScore > humanScore) {
    console.log("\nOH NO! UNFORTUNATELY, YOU HAVE TO GO HARDER");
  } else if (computerScore === humanScore) {
    console.log("\nA TIE, WANNA GIVE IT ANOTHER TRY?");
  } else {
    console.log("\nCONGRATULATIONS! YOU WON");
  }
}
