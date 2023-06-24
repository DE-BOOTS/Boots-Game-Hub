'use strict';

//ELEMENT DECLARATION
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerName0El = document.querySelector('#name--0');
const playerName1El = document.querySelector('#name--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//switch player function

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//ROLL DICE FUNCTIONALITY

btnRoll.addEventListener('click', function () {
  if (playing) {
    // - generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // - display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // - check for rolled i dice : if true switch player

    if (dice !== 1) {
      //add dice to  the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

//HOLD BUTTON FUNCTIONALITY
btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player score is >= 100
    if (scores[activePlayer] >= 50) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      //check player
      if (activePlayer === 0) {
        playerName0El.textContent = 'Winner !!';
      } else if (activePlayer === 1) {
        playerName1El.textContent = 'Winner !!';
      }

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to next player
      switchPlayer();
    }
    //finish game
  }
});

//NEW GAME BUTTON FUNCTIONALITY

btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  playerName0El.textContent = 'Player 1';
  playerName1El.textContent = 'Player 2';
  diceEl.classList.add('hidden');
  playing = true;
  activePlayer = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
});
