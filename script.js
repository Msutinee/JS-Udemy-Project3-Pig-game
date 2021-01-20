'use strict';

// document.querySelector('.dice').style.display = 'none';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentPlayer = 0;
let playerScore = 0;
let currentScore = 0; // Cannot be inside
//if that it will reset everytime when clicked

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDiceNumber);
  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomDiceNumber}.png`;
  // 3. check for rolled 1
  if (randomDiceNumber !== 1) {
    // Add dice to current score
    //currentScore = currentScore + randomDiceNumber;
    currentScore += randomDiceNumber;
    document.getElementById(
      `current--${currentPlayer}`
    ).textContent = currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
