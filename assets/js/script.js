var timerEl = document.querySelector('.countdown');
var mainEl = document.querySelector('.page-content');
var questions = [];

var questionCount = 0;
var answerCount = 0;

// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft >= 1 && timeLeft <= 75) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = "Time: " + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
        }
    }, 1000);
};

var startButtonHandler = function (event) {
    // Get target element from event
    var targetEl = event.target;
  
    if (targetEl.matches("#start-btn")) {
        removeStarterText();
    }
    startQuiz();
};
  
// Displays the quiz question one at a time
function startQuiz() {
    countdown();
    generateQuestions();
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    // var questionInterval = setInterval(function () {
    // // If there are no more words left in the message
    // if (questions[questionCount] === undefined) {
    //     // Use `clearInterval()` to stop the timer
    //     clearInterval(questionInterval);
    //   } else {
    //     // Display one word of the message
    //     generateQuestions();
    //     mainEl.textContent = question[questionCount];
    //     questionCount++;
    //   }
    // }, 1000);
};

var removeStarterText = function() {
    var startTitleEl = document.querySelector("#start-title");
    startTitleEl.remove();

    var startTextEl = document.querySelector("#start-text");
    startTextEl.remove();

    var startBtnEl = document.querySelector("#start-btn");
    startBtnEl.remove();
};

var generateQuestions = function() {
    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "questions-container";
    mainEl.appendChild(questionContainerEl);

    var questionTextEl = document.createElement("h1");
    questionTextEl.className = "question-text";
    questionTextEl.textContent = "Commonly used data types DO NOT include:";
    questionContainerEl.appendChild(questionTextEl)

    var answerList = document.createElement("ul");
    answerList.className = "answer-list";
    questionContainerEl.appendChild(answerList);

    
    for (i = 0; i < 4; i++) {
        // create answer buttons
        var answerListItem = document.createElement("li");
        answerListItem.classname = "answer-list-item";

        var answerButtonEl = document.createElement("button");
        answerButtonEl.textContent = "";
        answerButtonEl.className = "btn answer-btn";

        answerList.appendChild(answerListItem)
        answerListItem.appendChild(answerButtonEl);
    };
};


mainEl.addEventListener("click", startButtonHandler);
