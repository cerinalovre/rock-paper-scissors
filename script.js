function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playerPlay() {
  let playerSelection = "";

  while (playerSelection != null) {
    playerSelection = prompt('Choose "rock", "paper" or "scissors"');

    if (playerSelection === null) {
      throw new Error("You quit the game!");
    }

    playerSelection = playerSelection.toLowerCase();

    if (
      playerSelection == "rock" ||
      playerSelection == "paper" ||
      playerSelection == "scissors"
    ) {
      return playerSelection;
    } else {
      console.log("Invalid input, try again!");
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(
      `COMPUTER: ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } --- Draw!`
    );
    return "draw";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("COMPUTER: Paper --- You LOSE! Paper beats Rock!");
      return "lose";
    } else if (computerSelection === "scissors") {
      console.log("COMPUTER: Scissors --- You WIN! Scissors beat Rock!");
      return "win";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("COMPUTER: Scissors --- You LOSE! Scissors beat Paper!");
      return "lose";
    } else if (computerSelection === "rock") {
      console.log("COMPUTER: Rock --- You WIN! Paper beats Rock!");
      return "win";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("COMPUTER: Rock --- You LOSE! Rock beats Scissors!");
      return "lose";
    } else if (computerSelection === "paper") {
      console.log("COMPUTER: Paper --- You WIN! Scissors beat Paper!");
      return "win";
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result = null;

  console.log(
    "Welcome to the Rock, paper, scissors game. The game is played for 5 rounds. Good luck!"
  );

  while (playerScore < 3 && computerScore < 3) {
    result = playRound(playerPlay(), computerPlay());

    if (result === "win") {
      playerScore += 1;
    } else if (result === "lose") {
      computerScore += 1;
    }

    console.log(
      `CURRENT RESULT: [PLAYER:${playerScore} COMPUTER:${computerScore}]`
    );
  }

  if (playerScore > computerScore) {
    console.log(
      `[PLAYER:${playerScore} COMPUTER:${computerScore}] YOU WON THE GAME!`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `[PLAYER:${playerScore} COMPUTER:${computerScore}] YOU LOST THE GAME!`
    );
  } else {
    console.log(
      `[PLAYER:${playerScore} COMPUTER:${computerScore}] IT'S A DRAW!`
    );
  }
}

game();
