'use strict';
//variable declaration
const modal = document.querySelector('.modal');
const modal0 = document.querySelector('#modal0');
const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');
const overlay = document.querySelector('.overlay');
const btn0El = document.querySelector('#guess');
const btn1El = document.querySelector('#pig');
const btn2El = document.querySelector('#rock');
const btnCloseModal0 = document.querySelector('.close-modal0');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');
const howToPlayBtnEl = document.querySelector('#btn-info');
const guessEl = document.querySelector('#guess-title');
const pigEl = document.querySelector('#pig-title');
const rockEl = document.querySelector('#rock-title');
const gameRulesEl = document.querySelector('#game-rules');
console.log(modal0);
console.log(modal1);
console.log(modal2);

//close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//button info
howToPlayBtnEl.addEventListener('click', function () {
  //title

  gameRulesEl.textContent = 'Game Rules';
  gameRulesEl.style.color = '#fff';
  // revealing modal window
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');

  btnCloseModal3.addEventListener('click', function () {
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', function () {
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});

//GUESS MY NUMBER BUTTON
btn0El.addEventListener('click', function () {
  //setting title game
  guessEl.textContent = 'Guess My Number';
  // revealing modal window
  modal0.classList.remove('hidden');
  overlay.classList.remove('hidden');

  btnCloseModal0.addEventListener('click', function () {
    modal0.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', closeModal);
});

//PIG DICE GAME
btn1El.addEventListener('click', function () {
  //setting game title
  pigEl.textContent = 'Pig Dicee';
  // revealing modal window
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');

  btnCloseModal1.addEventListener('click', function () {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', function () {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});

//ROCK PAPER SCISSORS GAME
btn2El.addEventListener('click', function () {
  //setting  game title
  rockEl.textContent = 'Rock Paper Scissors';
  // revealing modal window
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
  btnCloseModal2.addEventListener('click', function () {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', function () {
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});
