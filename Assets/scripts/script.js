
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
// const displayquestionButton = document.getElementById("question-button");

// game event listeners
startButton.addEventListener("click", startGame);

// run game
function startGame() {
    // start/display timer
    startTimer();

  // hide start button
document.querySelector("#start-quiz-button").classList.add("invisible");

    console.log("start game")

    for (let index = 0; index < 1; index++) { // TODO CHANGE INDEX TO: questions.length
      const questionsElement = questions[index];
      // const {} = questions[index];

      displayQuestion(questionsElement); // display question
      

      // console.log(questions[index].question)
      // console.log(questions[index].answers)
      // console.log(questions[index].correctResponse)
      
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
  // unhide answer buttons
  document.querySelector(".list-group").classList.toggle("invisible");
  

  console.log("display question")
  console.log(document.querySelector(".display-2"))
  console.log(questionElementObj)
  console.log(questionElementObj.question)
}

function startTimer() {
  displayTimer();
  // console.log("start timer")
}

function displayTimer() {
  // console.log("display timer")
}