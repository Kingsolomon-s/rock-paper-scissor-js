// console.log("Hello World!");
// CREATE a new function "getComputerChoice"
// The function randomly returns "rock", "paper" or "scissors"
// CREATE a new function "getHumanChoice"
// Inside "getHumanChoice" prompt for human input
// MAKE "getHumanChoice" case-insensitive
// RETURN human input

// CREATE two new variables "humanScore" and "computerScore"

// CREATE a new function "playRound"
// DEFINE "humanChoice" and "computerChoice" as parameters for playRound
// TAKE humanChoice and computerChoice as arguments
//

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
  if ((humanChoice === "ROCK") & (computerChoice === "PAPER")) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log("YOU LOSE!");
  } else if ((humanChoice === "PAPER") & (computerChoice === "SCISSOR")) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log("YOU LOSE!");
  } else if ((humanChoice === "SCISSOR") & (computerChoice === "ROCK")) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log("YOU LOSE!");
  } else if (humanChoice === computerChoice) {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log("It's a DRAW!");
  } else {
    console.log(`Your OPP chose ${computerChoice}`);
    console.log("YOU WIN!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
