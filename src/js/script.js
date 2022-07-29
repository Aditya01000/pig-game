"use strict";


// defining var and const values

let player1Score = document.querySelector(".player1-score");
let player2Score = document.querySelector(".player2-score");
let bothPlayerScore = document.querySelector(".player-score");
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
const modalNewGameBtn = document.querySelector(".rick-roll-new-game-btn");

// defining functions for long codes

const playerSScores = function () {
  player1Score.textContent = Number(0);
  player2Score.textContent = Number(0);
};

const playersCurrentScores = function () {
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

const winningModal = () => {
  const modalContainer = document.querySelector("[data-modal-container]");

  const closeModal = function () {
    modalContainer.classList.remove("show");
  };
  const openModal = function () {
    modalContainer.classList.add("show");
  };
  modalNewGameBtn.addEventListener("click", () => {
    closeModal();
  })
  modalContainer.classList.add("show");

  document.querySelector(
    `.title`
  ).textContent = `Congratulations Player${activePlayer}`;

  modalContainer.addEventListener("click", (e) => {
    if (e.target !== modalContainer) return;
    closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
};

const resetGameNewGameBtn = function () {
  playing = true;
  audioNewGame.currentTime = 0;
  activePlayer = 1;
  currentScore = 0;
  scores = [0, 0];
  playerSScores();
  playersCurrentScores();
  diceImage.classList.remove("show-dice-img");

  document.querySelector(
    `.player${activePlayer}-current-dice-score-textContent`
  ).textContent = Number(0);


  setTimeout(() => {
    player1Bg.classList.remove("unactive-color");
    player1Bg.classList.add("active-color");
    player2Bg.classList.add("unactive-color");
    player2Bg.classList.remove("active-color");

    player1Name.classList.add("active-player-name");
    player1Name.classList.remove("unactive-player-name");
    player2Name.classList.remove("active-player-name");
    player2Name.classList.add("unactive-player-name");
  }, 100);
};
const audioAddCode = function () {
  document.querySelector(".roll-dice").setAttribute("onclick", "audioDiceFall.play()");
  document.querySelector(".hold").setAttribute("onclick", "audioDiceHold.play()");
}

// main functuality starts here

playerSScores();
playersCurrentScores();
diceImage.classList.add("hide-dice-img");

//roll dice functuality starts here

let currentScore = 0;
let activePlayer = 1;
let scores = [0, 0];
let playing = true;
for (let i = 100; i <= 900; i = i + 200) {
  rollDice.addEventListener("click", () => {
    if (playing) {
      audioDiceFall.currentTime = 0.1;

      const diceRandomImg = Math.trunc(Math.random() * 6 + 1);
      setTimeout(() => {
        diceImage.classList.add("show-dice-img");
        diceImage.src = `/assets/images/dice-${diceRandomImg}.png`;
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

//hold dice functuality starts here

hold.addEventListener("click", () => {
  if (playing) {
    audioDiceHold.currentTime = 0.07;

    scores[activePlayer - 1] += currentScore;

    document.querySelector(`.player${activePlayer}-score`).textContent =
      scores[activePlayer - 1];
    if (scores[activePlayer - 1] >= 69) {
      playing = false;
      document.querySelector(".roll-dice").removeAttribute("onclick");
      document.querySelector(".hold").removeAttribute("onclick");

      diceImage.classList.remove("show-dice-img");

      winningModal();
    } else {
      switchPlayer();
    }
  }
});

// new game buttons functuality starts here!!!
newGameBtn.addEventListener("click", () => {
  resetGameNewGameBtn();
  audioAddCode();
});

// new game modal functuality starts here!!!
modalNewGameBtn.addEventListener("click", () => {
  resetGameNewGameBtn();
  audioAddCode();
})

//  rules functuality starts here!!!
const ruleBtn = document.querySelector(".rule-btn");
ruleBtn.addEventListener("click", () => {
  document.querySelector(".rule-img").classList.toggle("show-rule-img")
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".rule-img").classList.remove("show-rule-img")
  };
});

// rules end here





$(window).on("load", function () {
  setTimeout(() => {
    $(".loader-wrapper").fadeOut("slow");
  }, 1);
});
