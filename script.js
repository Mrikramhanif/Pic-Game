"use strict";
//Select Element
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceImg = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
//Assign value to score
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;

//add Event listner functionality to Roll dice button

btnRoll.addEventListener("click", function () {
  let diceRoll = Math.trunc(Math.random() * 6 + 1);

  //display Dice
  diceImg.classList.remove("hidden");
  diceImg.src = `images/dice-${diceRoll}.png`;

  if (diceRoll !== 1) {
    currentScore = currentScore + diceRoll;
    console.log(currentScore);
    current0El.textContent = currentScore;
  } else {
  }
});
