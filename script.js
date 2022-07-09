"use strict";
// defining var and const values
const player1Score = document.querySelector(".player2-score");
const player2Score = document.querySelector(".player1-score");
const hold = document.querySelector(".hold");
const player1Name = document.querySelector(".player1");
const player2Name = document.querySelector(".player2");
const newGameBtn = document.querySelector(".new-game");
const diceImage = document.querySelector(".dice-image");
const player1CurrentScore = document.querySelector(
  ".player1-current-dice-score-textContent"
);
const player2CurrentScore = document.querySelector(
  ".player2-current-dice-score-textContent"
);
const rollDice = document.querySelector(".roll-dice");

let currentScore = 0;

// defining functions for long codes
const playerSScores = function () {
  player1Score.textContent = Number(0);
  player2Score.textContent = Number(0);
};
const playerSCurrentScores = function () {
  player1CurrentScore.textContent = Number(0);
  player2CurrentScore.textContent = Number(0);
};

const BgColorsOfBothPlayers = function () {
  player1Name.style.background = "rgba(219, 175, 188, 0.989)";
  player2Name.style.background = "rgba(196, 121, 141, 0.989)";
};
const invertedBgColorsOfBothPlayers = function () {
  player1Name.style.background = "rgba(196, 121, 141, 0.989)";
  player2Name.style.background = "rgba(219, 175, 188, 0.989)";
};

// main functuality starts here
playerSScores();
playerSCurrentScores();
diceImage.classList.add("hide-dice-img");

// new game buttons functuality starts here!!!
newGameBtn.addEventListener("click", () => {
  playerSScores();
  playerSCurrentScores();
  diceImage.classList.add("hide-dice-img");
  diceImage.classList.remove("show-dice-img");
  BgColorsOfBothPlayers();
  currentScore = 0;
});

//roll dice functuality starts here

for (let i = 100; i <= 900; i = i + 200) {
  rollDice.addEventListener("click", () => {
    const diceRandomImg = Math.trunc(Math.random() * 6 + 1);
    setTimeout(() => {
      diceImage.classList.add("show-dice-img");
      diceImage.src = `./images/dice-${diceRandomImg}.png`;
    }, i);
    if (diceRandomImg !== 1) {
      if (i === 900) {
        setTimeout(() => {
          currentScore += diceRandomImg;
          player1CurrentScore.textContent = currentScore;
        }, 900);
      }
    } else {
      if (i === 900) {
        setTimeout(() => {
          invertedBgColorsOfBothPlayers();
        }, 900);
      }
    }
  });
}
/* run game screeen code

document.querySelector(".enter-screen-box").addEventListener("click", () => {
  document.querySelector(".enter-screen-wrapper").style.opacity = "0";
  document.querySelector(".enter-screen-wrapper").style.visibility = "hidden";
});

*/

/* 

hold functuality which was failed

hold.addEventListener("click", () => {
  //   player1Name.style.background = "rgba(188, 122, 150, 0.989)";
  //   player2Name.style.background = "rgba(219, 175, 188, 0.989)";

  if ((player1Name.style.background = "rgba(219, 175, 188, 0.989)")) {
    player1Name.style.background = "rgba(188, 122, 150, 0.989)";
    player2Name.style.background = "rgba(219, 175, 188, 0.989)";
  } else if ((player1Name.style.background = "rgba(188, 122, 150, 0.989)")) {
    player2Name.style.background = "rgba(188, 122, 150, 0.989)";
    player1Name.style.background = "rgba(219, 175, 188, 0.989)";
  }
});


*/
// ok
