'use strict';

//variable declaration
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highScore = 0;
const ultimateScore = 30;

//DISPLAY MESSAGE FUNCTION

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there is no input
  if (!guess) {
    displayMessage('No Number ⛔');

    //when player whins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🥳');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#45b649';
    document.querySelector('.number').style.width = '30rem';

    //calling highscore function

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    if (highScore >= ultimateScore) {
      displayMessage(
        `GAME WON WITH A TOTAL SCORE OF ${highScore}. PLAY AGAIN ? 🤨`
      );
      document.querySelector('.message').style.color = '#2c3e50';
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('body').style.backgroundColor = '#e73827';
      document.querySelector('.score').textContent = 0;
    }
  }

  //REST BUTTON

  document.querySelector('.again').addEventListener('click', function () {
    score = 30;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    highScore === ultimateScore
      ? (document.querySelector('.highscore').textContent = 0)
      : (document.querySelector('.highscore').textContent = highScore);

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
