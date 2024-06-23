let rock = document.querySelector(".Rock");
let paper = document.querySelector(".Paper");
let scissor = document.querySelector(".Scissor");
let scorePlayer = document.querySelector(".scoreplayer");
let scoreComputer = document.querySelector(".scorecomputer");
let computer = document.querySelector(".Computer");
let player = document.querySelector(".Player");
let score = 0;
let computerScore = 0;
let playerScore = 0;
let max = 5;
let array = ["✊", "🖐", "✌️"];

function defaults() {
  player.textContent = "❔";
  computer.textContent = "❔";
  scorePlayer.textContent = 0;
  scoreComputer.textContent = 0;
  computerScore = 0;
  playerScore = 0;
}
function checkWinner() {



 
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
});

function getRandomInt() {
  let Ai = array[Math.floor(Math.random() * 3)];
  return Ai;
}

if (player.textContent === computer.textContent) {
  scorePlayer.textContent = 0;
  scoreComputer.textContent = 0;
}
