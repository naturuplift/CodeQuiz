
// Pool of question and answers for quiz game
const questions = [
    {
      question: "What does API stand for in the context of Web development?",
      answers: ["Advanced Programming Interface", "Application Programming Interface",
       "Automated Programming Interface", "Abstract Programming Interface"],
      correctResponse: "Application Programming Interface"
    },
    {
      question: "Which Web API is used for making asynchronous HTTP requests in JavaScript?",
      answers: ["DOM API", "JSON API", "AJAX (Asynchronous JavaScript and XML)", "C WebSocket API"],
      correctResponse: "AJAX (Asynchronous JavaScript and XML)"
    },
    {
      question: "What does HTML stand for?",
      answers: ["Hyper Text Markup Language", "High-level Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      correctResponse: "Hyper Text Markup Language"
    },
    {
    question: "Which Web API is used for making asynchronous HTTP requests in JavaScript?",
    answers: ["DOM API", "JSON API", "AJAX (Asynchronous JavaScript and XML)", "C WebSocket API"],
    correctResponse: "AJAX (Asynchronous JavaScript and XML)"
    },
    // add more Q & A
  ];

  // add game variables
const startButton = document.getElementById("start-quiz-button");
const timerDisplay = document.getElementById("timer-display-id");
// const answerSelected =  document.querySelector("#first-answer-btn").innerHTML = questionElementObj.answers[0];
const startTimeSeconds = 60;
timerDisplay.textContent = 'Time: ' + startTimeSeconds; // starting time displayed
var timeRemaining = startTimeSeconds;
var timeInterval;
var score = 0;

// game event listeners
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("start game")
  startTimer(); // start/display timer

  document.querySelector("#start-quiz-button").classList.add("invisible"); // hide start button
  document.querySelector(".list-group").classList.toggle("invisible"); // unhide answer buttons

  for (let index = 0; index < 1; index++) { // TODO CHANGE INDEX TO: questions.length
    const questionsElement = questions[index];

    displayQuestion(questionsElement); // display question
    // console.log(questionsElement)

    answeredQuestion(index); // listen for answer selected
    
    // const element = questions.answers[index]; 
    // console.log(questions[index].correctResponse)   
  }
}

// listen for answered question
function answeredQuestion(questionIndex) {
  document.querySelectorAll(".answer-btn")[0].addEventListener("click",trackAnswer(0));
  document.querySelectorAll(".answer-btn")[1].addEventListener("click",trackAnswer(1));
  document.querySelectorAll(".answer-btn")[2].addEventListener("click",trackAnswer(2));
  document.querySelectorAll(".answer-btn")[3].addEventListener("click",trackAnswer(3));

  var buttonInnerHTML = this.innerHTML;

  // trackAnswer(buttonInnerHTML);
  console.log(buttonInnerHTML)
}

function trackAnswer(key) {
  console.log(key)
  switch (key) {
    case 0:
      console.log("answered #1")
      break;
    case 1:
      console.log("answered #2")
      break;
    case 2:
      console.log("answered #3")
      break;
    case 3:
      console.log("answered #4")
      break;
    default:
      break;
  }
}

function displayQuestion(questionElementObj) {
  // const startButton = document.getElementById("start-quiz-button");
  document.querySelector(".display-2").style.fontSize = "30px";
  document.querySelector(".display-2").innerHTML = questionElementObj.question;
  // display questions
  document.querySelector("#first-answer-btn").innerHTML = questionElementObj.answers[0];
  document.querySelector("#second-answer-btn").innerHTML = questionElementObj.answers[1];
  document.querySelector("#third-answer-btn").innerHTML = questionElementObj.answers[2];
  document.querySelector("#fourth-answer-btn").innerHTML = questionElementObj.answers[3];
  // console.log("exit displayQuestion function")
}

function startTimer() {
// run time interval for the game
  timeInterval = setInterval(function() {
    if (timeRemaining >= 0) {
      displayTimer();
      timeRemaining--;
    } else {
      timeRemaining--;
      endGame();
      console.log("exit startTimer function")
      return;
    }
  }, startTimeSeconds*17);
}

function displayTimer() {
  const timeLeftSeconds = timeRemaining%(startTimeSeconds+1);
  // timerDisplay.textContent = `Time: ${formatTime(timeLeftSeconds)}`;
  timerDisplay.textContent = "Time: " + timeLeftSeconds;
  // console.log("exit displayTimer function")
}

function endGame() {
  clearInterval(timeInterval);
  document.querySelector(".display-2").style.fontSize = "60px";
  document.querySelector(".display-2").innerHTML = "GAME OVER";
  // reset question display
  document.querySelector(".list-group").classList.toggle("invisible"); // hide answer buttons
  document.querySelector("#start-quiz-button").classList.toggle("invisible"); // unhide start button
  timeRemaining = startTimeSeconds; // reset timer
  console.log("exit endGame function")
  return;
}