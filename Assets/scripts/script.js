
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
// displayquestionButton.addEventListener("click", displayQuestion);
console.log(startButton)//,displayquestionButton)


function startGame() {
    // start/display timer
    startTimer();

    // change start button to next question
    document.querySelector("#start-quiz-button").innerHTML = "Next Question";

    console.log("start game")
    // display questions
    // console.log(questions.length)
    // console.table(questions)
    for (let index = 0; index < questions.length; index++) {
      const questionsElement = questions[index];
      // const {} = questions[index];

      displayQuestion(questionsElement); // display question

      // console.log(questions[index].question)
      // console.log(questions[index].answers)
      // console.log(questions[index].correctResponse)
      
    }
}

function displayQuestion(displayQuestions) {

  // <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  //   <button type="button" class="btn btn-primary"></button>
  //   <button type="button" class="btn btn-primary">Button</button>
  //   <button type="button" class="btn btn-primary">Button</button>
  //   <button type="button" class="btn btn-primary">Button</button>
  // </div>
  
    console.log("display question")
}

function startTimer() {
  displayTimer();
  // console.log("start timer")
}

function displayTimer() {
  // console.log("display timer")
}