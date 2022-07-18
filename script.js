"use strict";
// defining var and const values
let player1Score = document.querySelector(".player1-score");
let player2Score = document.querySelector(".player2-score");
const hold = document.querySelector(".hold");
const player1Bg = document.querySelector(".player1");
const player2Bg = document.querySelector(".player2");
const newGameBtn = document.querySelector(".new-game");
const diceImage = document.querySelector(".dice-image");
const player1CurrentScore = document.querySelector(
  ".player1-current-dice-score-textContent"
);
const player2CurrentScore = document.querySelector(
  ".player2-current-dice-score-textContent"
);
const rollDice = document.querySelector(".roll-dice");
const player1Name = document.querySelector(".active-player-name");
const player2Name = document.querySelector(".unactive-player-name");
// defining functions for long codes
const playerSScores = function () {
  player1Score.textContent = Number(0);
  player2Score.textContent = Number(0);
};
const playerSCurrentScores = function () {
  player1CurrentScore.textContent = Number(0);
  player2CurrentScore.textContent = Number(0);
};
const switchPlayer = () => {
  document.querySelector(
    `.player${activePlayer}-current-dice-score-textContent`
  ).textContent = Number(0);
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
  player1Bg.classList.toggle("unactive-color");
  player1Bg.classList.toggle("active-color");
  player2Bg.classList.toggle("unactive-color");
  player2Bg.classList.toggle("active-color");

  player1Name.classList.toggle("active-player-name");
  player1Name.classList.toggle("unactive-player-name");
  player2Name.classList.toggle("active-player-name");
  player2Name.classList.toggle("unactive-player-name");
};
// main functuality starts here
playerSScores();
playerSCurrentScores();
diceImage.classList.add("hide-dice-img");

// new game buttons functuality starts here!!!
newGameBtn.addEventListener("click", () => {
  activePlayer = 1;
  playerSScores();
  playerSCurrentScores();
  diceImage.classList.add("hide-dice-img");
  diceImage.classList.remove("show-dice-img");
  currentScore = 0;
});

//roll dice functuality starts here
let currentScore = 0;
let activePlayer = 1;
let scores = [0, 0];
let playing = true;
for (let i = 100; i <= 900; i = i + 200) {
  rollDice.addEventListener("click", () => {
    if (playing) {
      const diceRandomImg = Math.trunc(Math.random() * 3 + 1);
      setTimeout(() => {
        diceImage.classList.add("show-dice-img");
        diceImage.src = `./images/dice-${diceRandomImg}.png`;
      }, i);

      if (diceRandomImg !== 1) {
        if (i === 900) {
          setTimeout(() => {
            currentScore += diceRandomImg;
            document.querySelector(
              `.player${activePlayer}-current-dice-score-textContent`
            ).textContent = currentScore;
          }, 900);
        }
      } else {
        if (i === 900) {
          setTimeout(() => {
            switchPlayer();
          }, 900);
        }
      }
    }
  });
}

hold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer - 1] += currentScore;

    document.querySelector(`.player${activePlayer}-score`).textContent =
      scores[activePlayer - 1];
    if (scores[activePlayer - 1] >= 1) {
      playing = false;

      ("use strict");
      const modalContainer = document.querySelector("[data-modal-container]");

      const closeModal = function () {
        modalContainer.classList.remove("show");
      };
      const openModal = function () {
        modalContainer.classList.add("show");
      };

      modalContainer.classList.add("show");

      modalContainer.addEventListener("click", (e) => {
        if (e.target !== modalContainer) return;
        closeModal();
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
      });
    } else {
      switchPlayer();
    }
  }
});

// $(window).on("load", function () {
//   setTimeout(() => {
//     $(".loader-wrapper").fadeOut("slow");
//   }, 1);
// });
