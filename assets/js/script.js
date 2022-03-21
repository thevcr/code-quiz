var timerEl = document.querySelector('.countdown');
var mainEl = document.querySelector('.page-content');
var startEl = document.querySelector("#start-btn");
var questions = [];
var questionCount = 0;

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
        debugger;
        removeStarterText();
    }
    startQuiz();
};
  
// Displays the quiz question one at a time
function startQuiz() {
    countdown();
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var questionInterval = setInterval(function () {
    // If there are no more words left in the message
    if (questions[questionCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(questionInterval);
      } else {
        // Display one word of the message
        mainEl.textContent = question[questionCount];
        questionCount++;
      }
    }, 1000);
};

function removeStarterText() {
    var startTitleEl = document.querySelector("#start-title");
    var startTextEl = document.querySelector("#start-text");
    var startBtnEl = document.querySelector("#start-btn");

    if (mainEl.matches("#start-title")) {
        mainEl.removeChild(startTitleEl);
    }
    if (mainEl.matches("#start-text")) {
        mainEl.removeChild(startTextEl);
    }
    if (mainEl.matches("#start-btn")) {
        mainEl.removeChild(startBtnEl);
    }
};

mainEl.addEventListener("click", startButtonHandler);
