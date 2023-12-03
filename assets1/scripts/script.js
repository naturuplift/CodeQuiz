// Pool of question and answers for quiz game
const questions = [
    {
      question: "What does API stand for in the context of Web development?",
      answers: ["Advanced Programming Interface", "Application Programming Interface",
       "Automated Programming Interface", "Abstract Programming Interface"],
      correctResponse: "B"
    },
    {
      question: "Which Web API is used for making asynchronous HTTP requests in JavaScript?",
      answers: ["DOM API", "JSON API", "AJAX (Asynchronous JavaScript and XML)", "C WebSocket API"],
      correctResponse: "C"
    },
    {
      question: "What does HTML stand for?",
      answers: ["Hyper Text Markup Language", "High-level Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      correctResponse: "A"
    },
    {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: ["var", "let", "const", "variable"],
    correctResponse: "A"
    },
  ];

  // add game variables
const startButton = document.getElementById("start-quiz-button");
const timerDisplay = document.getElementById("timer-display-id");
const firstAnswerBtn = document.getElementById("first-answer-btn");
const secondAnswerBtn = document.getElementById("second-answer-btn");
const thirdAnswerBtn = document.getElementById("third-answer-btn");
const fourthAnswerBtn = document.getElementById("fourth-answer-btn");
const resultContainer = document.getElementById("game-results");
const viewHighScores = document.getElementById("fs-3");

// add listeners for answer buttons
firstAnswerBtn.addEventListener('click', function() {
  answeredQuestion("A");
});
secondAnswerBtn.addEventListener('click', function() {
  answeredQuestion("B");
});
thirdAnswerBtn.addEventListener('click', function() {
  answeredQuestion("C");
});
fourthAnswerBtn.addEventListener('click', function() {
  answeredQuestion("D");
});

var savedScore; // scored saved locally

viewHighScores.addEventListener('click', function() {
  getScoreFromLocalStorage();
});

const startTimeSeconds = 60;
timerDisplay.textContent = 'Time: ' + startTimeSeconds; // starting time displayed
var timeRemaining = startTimeSeconds;
var timeInterval;
var questionAnswered = 0; // to keep track of # question answered
var timeLeftSeconds;
var scoresRegistry = []; // initialize score

// game event listeners
startButton.addEventListener("click", startGame);
var answerScore = 0; // keep score for answers
var tempScore = 0;

function startGame() {
  // console.log("start game") // TODO comment when game completed
  startTimer(); // start/display timer

  resultContainer.innerHTML = "";
  document.querySelector("#fs-3").innerHTML = "View High Scores";
  document.querySelector("#start-quiz-button").classList.add("invisible"); // hide start button
  document.querySelector(".list-group").classList.toggle("invisible"); // unhide answer buttons
  document.querySelector("#ask-to-select").classList.toggle("invisible"); // unhide question <p>

  // display questions first
  displayQuestion(questions[questionAnswered]);
}

// listen for answered question and track answer
function answeredQuestion(answerClick) {
  // console.log('This is the clicked answer: ' + answerClick) // TODO comment when game completed

  // display if correct or incorrect answer
  if (answerClick === questions[questionAnswered].correctResponse) {
    document.querySelector(".fs-5").innerHTML = "Correct!";
    answerScore ++;
  } else {
    document.querySelector(".fs-5").innerHTML = "Incorrect!";
    timeRemaining = timeRemaining - 15; // decrease time when selected wrong answer
  }

  // increment to go to next question
  questionAnswered ++;
  // console.log(' The question to be answer now is: ' + questionAnswered); // TODO comment when game completed

  //end game is answers completed
  if (questionAnswered >= 4) {
    // console.log('Answered all questions - GAME OVER - restart game') // TODO comment when game completed
    endGame();
  } else {
    displayQuestion(questions[questionAnswered]); // display question
  }
}

// display question and answer options
function displayQuestion(questionElementObj) {
  // display question
  document.querySelector(".display-2").style.fontSize = "30px";
  document.querySelector(".display-2").innerHTML = questionElementObj.question;
  // display answers selection
  document.querySelector("#first-answer-btn").innerHTML = questionElementObj.answers[0];
  document.querySelector("#second-answer-btn").innerHTML = questionElementObj.answers[1];
  document.querySelector("#third-answer-btn").innerHTML = questionElementObj.answers[2];
  document.querySelector("#fourth-answer-btn").innerHTML = questionElementObj.answers[3];
}

// run time interval for the game
function startTimer() {
  timeInterval = setInterval(function() {
    if (timeRemaining >= 0) {
      displayTimer(); // display remaining time in game
      timeRemaining--;
    } else {
      timeRemaining--;
      endGame(); // finish game
      // console.log("exit startTimer function") // TODO comment when game completed
      return;
    }
  }, startTimeSeconds*17);
}

// display remaining time in game
function displayTimer() {
  timeLeftSeconds = timeRemaining%(startTimeSeconds+1);
  timerDisplay.textContent = "Time: " + timeLeftSeconds;
}

// finish game and reset buttons
function endGame() {
  clearInterval(timeInterval);
  document.querySelector(".display-2").style.fontSize = "60px";
  document.querySelector(".display-2").innerHTML = "GAME OVER";
  // reset question display
  document.querySelector(".list-group").classList.toggle("invisible"); // hide answer buttons
  document.querySelector("#start-quiz-button").classList.toggle("invisible"); // unhide start button
  document.querySelector("#ask-to-select").classList.toggle("invisible"); // hide question <p>

  resultContainer.innerHTML = `
  <h2>Your Score: ${answerScore} out of ${questions.length}</h2>
  <p>Time Left: ${timeLeftSeconds}</p>
  <label for="initials">Enter Initials:</label>
  <input type="text" id="initials" />
  <button onclick="saveScore()">Save Score</button>
  `;
  resultContainer.style.display = "block";

  timeRemaining = startTimeSeconds; // reset timer
  questionAnswered = 0; // reset questions answered counter
  savedScore = 0;
  tempScore = answerScore; // reset score
  answerScore = 0; // reset score
  // console.log("exit endGame function") // TODO comment when game completed
}

// Function to save the score
function saveScore() {
  const initialsInput = document.getElementById("initials").value;
  const initials = initialsInput.toString();

  // get last high score before saving new score
  var nameInput = localStorage.getItem("Initials");
  var getScore = localStorage.getItem("tempScore");

  // Stores name input in local Storage if score greater that saved one
  if (tempScore >= getScore) {
    localStorage.setItem("Initials", initials);
    localStorage.setItem("answerScore", tempScore);
  }
  // console.log(`Score: ${tempScore}, Initials: ${initials}`); // TODO comment when game completed
}

function getScoreFromLocalStorage() {
  var nameInput = localStorage.getItem("Initials");
  var getScore = localStorage.getItem("answerScore");
  viewHighScores.innerHTML = "Person: " + nameInput + ", with highest score: "+ getScore;
  // console.log(nameInput + " with a score: "+ getScore)  // TODO comment when game completed
}