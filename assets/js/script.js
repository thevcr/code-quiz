var timerEl = document.querySelector('.countdown');
var mainEl = document.querySelector('.page-content');
var startBtnEl = document.getElementById('start-btn');

var questionCount = 0;
var questionEl;
var answersEl;
var answersListItemEl;
var answerBtnEl;
var timeLeft;
var timeInterval;

// questions and answers object array
var questions = [
this.questionOne = {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings","booleans","alerts","numbers"],
    correctAnswerIndex: 2
},
this.questionTwo = {
    question: "The condition in an if/else statement is enclosed with:",
    answers: ["curly brackets", "square brackets", "quotation marks", "parenthesis"],
    correctAnswerIndex: 0
},
this.questionThree = {
    question: "Arrays in JavaScript can be used to store:",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswerIndex: 3
},
this.questionFour = {
    question: "A useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswerIndex: 3
},
this.questionFive= {
    question: "String values must be enclosed within _____ when assigning a variable",
    answers: ["commas", "curly brackets", "quotation marks", "parenthesis"],
    correctAnswerIndex: 2
}
];

// Timer that counts down from 75
function countdown() {
    timeLeft = 75;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
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
    event.preventDefault();

    while (mainEl.firstChild) {
        mainEl.removeChild(mainEl.firstChild)
    };
    startQuiz();
};
  
// Displays the quiz question one at a time
function startQuiz() {
    countdown();
    generateAdditionalQuestions();
    generateAdditionalAnswers();
};

var generateElementContainers = function() {
        // create questions container
        var questionContainerEl = document.createElement("div");
        questionContainerEl.className = "questions-container";
        mainEl.appendChild(questionContainerEl);
    
        // create question text container
        var questionTextEl = document.createElement("h1");
        questionTextEl.className = "question-text";
        questionContainerEl.appendChild(questionTextEl);
    
        // create answer list parent container
        var answerList = document.createElement("ul");
        answerList.className = "answer-list";
        questionContainerEl.appendChild(answerList);
};


var generateInitialAnswers = function() {
    answersEl = document.querySelector(".answer-list");

    for (i = 0; i < questions[i].answers.length; i++) {
        // create answer list item container
        var answerListItem = document.createElement("li");
        answerListItem.classname = "answer-list-item";

        var answerButtonEl = document.createElement("button");
        answerButtonEl.className = "btn answer-btn";

        if (questions[questionCount].answers.indexOf(questions[questionCount].answers[i]) === questions[questionCount].correctAnswerIndex) {
            answerButtonEl.setAttribute("id", "correct-answer-btn");
        }
        answersEl.appendChild(answerListItem);
        answerListItem.appendChild(answerButtonEl);
    };
}

var generateAdditionalQuestions = function() {
    if (!answersEl) {
        generateElementContainers();
    }
    questionEl = document.querySelector(".question-text");
    if (questions[questionCount] === undefined) {
        endQuiz();
    }
    questionEl.textContent = questions[questionCount].question;
};

var generateAdditionalAnswers = function() {
    if (!answersEl) {
        generateInitialAnswers();
    }
    answerBtnEl = document.querySelectorAll(".answer-btn", i);

    for (i=0; i<answerBtnEl.length; i++) {
        answerBtnEl[i].textContent = questions[questionCount].answers[i];

        answerBtnEl[i].removeAttribute("id", "correct-answer-btn");

        if (questions[questionCount].answers.indexOf(questions[questionCount].answers[i]) === questions[questionCount].correctAnswerIndex) {
            answerBtnEl[i].setAttribute("id", "correct-answer-btn");
        } else {
            answerBtnEl[i].setAttribute("id", "answer-btn");
        }
    }
    questionCount++;
    return answerBtnEl;
};

var endQuiz = function() {
    questionEl.textContent = "All done!";

    answersListItemEl = document.querySelector("ul");
    answersListItemEl.remove();

    var initialInputContainer = document.createElement("div");
    initialInputContainer.className = "initial-input-container";

    var finalScore = document.createElement("p");
    finalScore.textContent = "Your final score is: " + timeLeft;
    timerEl.textContent = '';
    clearInterval(timeInterval);

    var initialInputLabel = document.createElement("label");
    initialInputLabel.className = "initial-input";
    initialInputLabel.setAttribute("for", "initials");
    initialInputLabel.textContent = "Enter initials: ";

    var initialInput = document.createElement("input");
    initialInput.className = "initial-input";
    initialInput.setAttribute("type", "text");
    initialInput.setAttribute("name", "initials");
    initialInput.setAttribute("id", "initials");

    var initialSubmitBtn = document.createElement("button");
    initialSubmitBtn.className = "btn submit-btn";
    initialSubmitBtn.textContent = "Submit";
    
    mainEl.appendChild(finalScore);
    mainEl.appendChild(initialInputContainer);
    initialInputContainer.appendChild(initialInputLabel);
    initialInputContainer.appendChild(initialInput);
    initialInputContainer.appendChild(initialSubmitBtn);
}

// adding answer btn selection check
function hasCorrectId(elem, idName) {
    return elem.matches(idName);
}

var correctAnswerButtonHandler = function () {
    // only run if answer btn element is generated
    if (answerBtnEl) {
        generateAdditionalQuestions();
        generateAdditionalAnswers();
    }
};

var incorrectAnswerButtonHandler = function () {
    // only run if answer btn element is generated
    timeLeft -= 10;
    generateAdditionalQuestions();
    generateAdditionalAnswers();
};

startBtnEl.addEventListener("click", startButtonHandler);
mainEl.addEventListener("click", function (e) {
    if (hasCorrectId(e.target, '#correct-answer-btn')) {
        correctAnswerButtonHandler();
    } else if (hasCorrectId(e.target, '#answer-btn')) {
        incorrectAnswerButtonHandler();
    }
}, false);

