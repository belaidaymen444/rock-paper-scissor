let rock = document.querySelector(".Rock");
let groupe = document.querySelector(".groupe");
let paper = document.querySelector(".Paper");
let scissor = document.querySelector(".Scissor");
let scorePlayer = document.querySelector(".scoreplayer");
let scoreComputer = document.querySelector(".scorecomputer");
let computer = document.querySelector(".Computer");
let player = document.querySelector(".Player");
let winner = document.querySelector(".winner");
let alerts = document.querySelector(".alerts");
let score = 0;
let computerScore = 0;
let playerScore = 0;
let max = 0;
let array = ["✊", "🖐", "✌️"];

function defaults() {
  player.textContent = "❔";
  computer.textContent = "❔";
  scorePlayer.textContent = 0;
  scoreComputer.textContent = 0;
  computerScore = 0;
  playerScore = 0;
}

let clickedrock = rock.addEventListener("click", () => {
  player.textContent = "✊";
  computer.textContent = getRandomInt();
  if (computer.textContent === "🖐") {
    scoreComputer.textContent = ++computerScore;
  } else if (player.textContent === computer.textContent) {
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
  } else {
    scorePlayer.textContent = ++playerScore;
  }
  checkWinner();
});

let clickedpaper = paper.addEventListener("click", () => {
  player.textContent = "🖐";
  computer.textContent = getRandomInt();
  if (computer.textContent === "✌️") {
    scoreComputer.textContent = ++computerScore;
  } else if (player.textContent === computer.textContent) {
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
  } else {
    scorePlayer.textContent = ++playerScore;
  }
  checkWinner();
});
let clickedscissors = scissor.addEventListener("click", () => {
  player.textContent = "✌️";
  computer.textContent = getRandomInt();
  if (computer.textContent === "✊") {
    scoreComputer.textContent = ++computerScore;
  } else if (player.textContent === computer.textContent) {
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
  } else {
    scorePlayer.textContent = ++playerScore;
  }
  checkWinner();
});

function getRandomInt() {
  let Ai = array[Math.floor(Math.random() * 3)];
  return Ai;
}

function checkWinner() {
  if (scorePlayer.textContent == 5) {
    winner.textContent = "You Are The Winner";
    winner.style.color = "green";
    alerts.style.transform = "scale(1,1)";
    groupe.style.display = "none";
    alerts.style.boxShadow ="0 0 20px green"
  }
  if (scoreComputer.textContent == 5) {
    winner.textContent = "You Lost";
    winner.style.color = "red";

    alerts.style.transform = "scale(1,1)";
    groupe.style.display = "none";
    alerts.style.boxShadow ="0 0 20px red"
    
  }
}
