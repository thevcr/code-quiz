var timerEl = document.querySelector('.countdown');
var mainEl = document.querySelector('.main');
var startEl = document.getElementById("#start");
var questions = [];

// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // Run startQuiz() function
        startQuiz();
        // As long as the `timeLeft` is greater than 1
        if (timeLeft >= 1 && timeLeft <= 75) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
        }
    }, 1000);
}
  
// Displays the quiz question one at a time
function startQuiz() {
    var questionCount = 0;

    var clickStartBtn = mainEl.addEventListener("click", startEl);

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
}
  
countdown();
  