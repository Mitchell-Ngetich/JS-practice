'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceImage = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playerWinner = document.querySelector('.player--winner');
let scores, currentScore, activePlayer, playing

function init() {
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceImage.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

score0.textContent = 0;
score1.textContent = 0;

diceImage.classList.add('hidden');

// create a rolling dice functionality
btnRoll.addEventListener('click', function () {
  //  1. generate random numer 1 - 6
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //  2. display the dice image
    diceImage.classList.remove('hidden');
    /* the dice variable will generate random number btn
    1 -6, and ${dice} will iterate trough the number ad
    display images according to the generated number because
    the images are arranged numerically*/

    diceImage.src = `dice-${dice}.png`;
    // 3. check if the rolled dice, if its 1,switch player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // add current score o active player score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player's score is >=100

    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceImage.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
