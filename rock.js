//variable declaration
let userScore = 0;
let computerScore = 0;
let playing = true;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const winEl = document.querySelector('#win-text');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissor_div = document.querySelector('#s');
const newGame = document.querySelector('.reset-btn');
const btnGameEl = document.querySelector('#new-game');
const gameTipEl = document.querySelector('.game-tip');

if (playing) {
  //adding hidden class to new game button

  btnGameEl.classList.add('hidden');
  //function main call
  main();
  //get computer choice function
  function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randNumber = Math.trunc(Math.random() * 3);
    return choices[randNumber];
  }

  function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
  }

  //win function
  function win(user, computer) {
    //increasing user score
    userScore++;
    //updating html elements

    //checking results on console
    console.log(user);
    console.log(computer);
    const userChoiceDiv = document.getElementById(user);
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    winEl.textContent = `${convertToWord(user)} beats   ${convertToWord(
      computer
    )}. You win!🔥`;

    //adding glow effects to the button choice
    userChoiceDiv.classList.add('green-glow');
    setTimeout(function () {
      userChoiceDiv.classList.remove('green-glow');
    }, 600);

    //calling highestscore function

    //HIGHEST SCORE FUNCTION CALL
    highestScore(userScore, computerScore);
  }

  // lose function
  function lose(user, computer) {
    //increasing computer score
    computerScore++;
    //checking results on console
    console.log(user);
    console.log(computer);

    //updating html elements
    const userChoiceDiv = document.getElementById(user);
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    winEl.textContent = `${convertToWord(user)} lose to ${convertToWord(
      computer
    )}. You lost...💩`;

    //adding glow effects to the button choice
    userChoiceDiv.classList.add('red-glow');
    setTimeout(function () {
      userChoiceDiv.classList.remove('red-glow');
    }, 600);

    //HIGHEST SCORE FUNCTION CALL
    highestScore(userScore, computerScore);
  }

  //draw function
  function draw(user, computer) {
    //checking results on console
    console.log(user);
    console.log(computer);
    const userChoiceDiv = document.getElementById(user);
    winEl.textContent = `${convertToWord(user)} Equals ${convertToWord(
      computer
    )}. It's a draw.`;

    //adding glow effects to the button choice
    userChoiceDiv.classList.add('grey-glow');
    setTimeout(function () {
      userChoiceDiv.classList.remove('grey-glow');
    }, 600);

    //HIGHEST SCORE FUNCTION CALL
    highestScore(userScore, computerScore);
  }

  //function to check highest change final = 12
  function highestScore(userPoints, computerPoints) {
    //if statement

    if (userPoints >= 12) {
      winEl.textContent = ` User Wins The Game with Highest Score 🔥`;
      playing = false;
      hideButtons();

      //revealing new game button
      btnGameEl.classList.remove('hidden');
    } else if (computerPoints >= 12) {
      winEl.textContent = ` Computer Wins The  Game with Highest Score 🔥`;
      playing = false;
      hideButtons();

      //revealing new game button
      btnGameEl.classList.remove('hidden');
    } else if (
      (userPoints === computerPoints && userPoints >= 12) ||
      computerPoints >= 12
    ) {
      winEl.textContent = ` Game Ends in a Draw. Both Players have equal points.`;
      playing = false;
      hideButtons();
      //revealing new game button
      btnGameEl.classList.remove('hidden');
    }
  }

  //function game
  function game(userChoice) {
    const computerChoice = getCompChoice();
    // console.log("User Choice: " + userChoice);
    // console.log(" Computer choice: " + computerChoice);

    //switch statement
    switch (userChoice + computerChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        win(userChoice, computerChoice);
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        lose(userChoice, computerChoice);
        break;
      case 'rr':
      case 'pp':
      case 'ss':
        draw(userChoice, computerChoice);
        break;
    }
  }
  //function main declaration
  function main() {
    rock_div.addEventListener('click', function () {
      game('r');
    });

    paper_div.addEventListener('click', function () {
      game('p');
    });

    scissor_div.addEventListener('click', function () {
      game('s');
    });
  }
}

//new game function

newGame.addEventListener('click', function () {
  userScore = 0;
  computerScore = 0;
  winEl.textContent = 'Paper covers rock . You win !';
  userScore_span.textContent = 0;
  computerScore_span.textContent = 0;
  btnGameEl.classList.add('hidden');
  unhideButtons();
});

//function to disable hand sign buttons

function hideButtons() {
  rock_div.classList.add('hidden');
  paper_div.classList.add('hidden');
  scissor_div.classList.add('hidden');
  gameTipEl.classList.add('hidden');
}

//function to unhide the buttons
function unhideButtons() {
  rock_div.classList.remove('hidden');
  paper_div.classList.remove('hidden');
  scissor_div.classList.remove('hidden');
  gameTipEl.classList.remove('hidden');
}
