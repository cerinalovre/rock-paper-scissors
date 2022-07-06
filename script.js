function playRound(playerSelection, computerSelection) {
  const rpsInfo = document.querySelector(".rps-info");

  if (outcomeRules[playerSelection]["wins"] === computerSelection) {
    rpsInfo.textContent = `You WIN! ${capitalize(
      playerSelection
    )} beats ${capitalize(computerSelection)}!`;
    return "win";
  } else if (outcomeRules[playerSelection]["loses"] === computerSelection) {
    rpsInfo.textContent = `You LOSE! ${capitalize(
      computerSelection
    )} beats ${capitalize(playerSelection)}!`;
    return "lose";
  } else {
    rpsInfo.textContent = "DRAW!";
    return "draw";
  }
}

function updateScore(result) {
  const winLose = document.querySelector(".win-lose");
  const playerScoreBox = document.querySelector(".player-score-box");
  const compScoreBox = document.querySelector(".comp-score-box");

  if (result === "win") {
    score.player += 1;
    playerScoreBox.textContent = score.player;
  } else if (result === "lose") {
    score.computer += 1;
    compScoreBox.textContent = score.computer;
  }

  if (score.player === 5) {
    winLose.textContent = `You WON ${score.player} : ${score.computer}`;
    newGame();
  } else if (score.computer === 5) {
    winLose.textContent = `You LOST ${score.player} : ${score.computer}`;
    newGame();
  }
}

function newGame() {
  const modal = document.querySelector(".modal");
  const mainContainer = document.querySelector(".main-container");
  const yesButton = document.querySelector("#yes-button");
  const noButton = document.querySelector("#no-button");

  modal.style.display = "block";

  window.onclick = function (event) {
    if (event.target == modal) {
      mainContainer.classList.add("disabled");
      modal.style.display = "none";
    }
  };

  yesButton.addEventListener("click", () => {
    location.reload();
  });

  noButton.addEventListener("click", () => {
    modal.style.display = "none";
    mainContainer.classList.add("disabled");
  });
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function main() {
  let result = null;

  score = {
    player: 0,
    computer: 0,
  };

  outcomeRules = {
    rock: { wins: "scissors", loses: "paper" },
    paper: { wins: "rock", loses: "scissors" },
    scissors: { wins: "paper", loses: "rock" },
  };

  const rockButton = document.querySelector("#rock-button");
  const paperButton = document.querySelector("#paper-button");
  const scissorsButton = document.querySelector("#scissors-button");
  const playerSelectBox = document.querySelector(".player-select-box");
  const compSelectBox = document.querySelector(".comp-select-box");
  const playerSelectionImg = document.createElement("img");
  const compSelectionImg = document.createElement("img");

  rockButton.addEventListener("click", () => {
    chooseItem("assets/rock.svg", "select-rock", "rock");
  });

  paperButton.addEventListener("click", () => {
    chooseItem("assets/paper.svg", "select-paper", "paper");
  });

  scissorsButton.addEventListener("click", () => {
    chooseItem("assets/scissors.svg", "select-scissors", "scissors");
  });

  function chooseItem(imgSource, itemClass, playerSelection) {
    playerSelectionImg.setAttribute("src", imgSource);
    playerSelectBox.className = "";
    playerSelectBox.classList.toggle(itemClass);
    playerSelectBox.appendChild(playerSelectionImg);

    result = playRound(playerSelection, computerPlay());
    updateScore(result);
  }

  function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];

    compSelectionImg.setAttribute("src", `assets/${computerSelection}.svg`);
    compSelectBox.className = "";
    compSelectBox.classList.toggle(`select-${computerSelection}`);
    compSelectBox.appendChild(compSelectionImg);

    return computerSelection;
  }
}

main();
