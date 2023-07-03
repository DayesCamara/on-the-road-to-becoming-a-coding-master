var startButton = document.getElementById("Start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var timerValueElement = document.getElementById("timer-value");
var timeLeft = 60; // Total time in seconds
var score = 0;
var timerInterval;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    console.log("starting");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    startTimer(); // Start the timer when the game starts
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    // Clear previous answer buttons
    answerButtonElement.innerHTML = "";
    question.answers.forEach((answer) => {
        var button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct === "true") {
        score++; // Increment the score if the answer is correct
    } else {
        timeLeft -= 10; // Subtract 10 seconds if the answer is wrong
    }
    setTimeout(() => {
        currentQuestionIndex++;
        setNextQuestion();
    }, 1000); // Wait for 1 second before showing the next question
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function startTimer() {
    timeLeft = 60; // Reset the timer
    timerValueElement.innerText = timeLeft; // Display initial time
    timerInterval = setInterval(() => {
        timeLeft--;
        timerValueElement.innerText = timeLeft;
        if (timeLeft <= 0 || currentQuestionIndex >= shuffledQuestions.length) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000); // Update timer every 1 second
}

function endGame() {
    clearInterval(timerInterval);
    console.log("Game ended");

    // Calculate the final score
    var finalScore = (score / shuffledQuestions.length) * 100;

    // Display the final score
    questionContainerElement.classList.add("hide");
    document.getElementById("final-score").textContent =
        "Final Score: " + finalScore.toFixed(2);

    // Prompt the user for initials
    var initials = prompt("Enter your initials:");
    if (initials) {
        // Save initials and score in localStorage
        var highScore = localStorage.getItem("highScore");
        if (highScore === null || finalScore > parseInt(highScore)) {
            // If there is no previous high score or the current score is higher
            highScore = finalScore;
            localStorage.setItem("highScore", highScore);
            localStorage.setItem("highScoreInitials", initials);
        }
    }
}

var questions = [
    {
        question:
            "What is the result of the following expression in JavaScript? 'Dog'",
        answers: [
            { text: "null" },
            { text: "undefined" },
            { text: "object" },
            { text: "string", correct: true },
        ],
    },
    {
        question:
            "To access an HTML element from JavaScript, you can use this method'",
        answers: [
            { text: "getElementBytag" },
            { text: "getElementByIdd" },
            { text: "getIdByElement" },
            { text: "getElementById", correct: true },
        ],
    },
    {
        question:
            "Arrays in JavaScript are defined by which of the following statements?",
        answers: [
            { text: "It is an ordered list of objects" },
            { text: "It is an ordered list of string" },
            { text: " It is an ordered list of values", correct: true },
            { text: "It is an ordered list of string" },
        ],
    },
    {
        question: "Which of the following is not javascript data types? ",
        answers: [
            { text: "Null type" },
            { text: "Undefined type" },
            { text: "Number type" },
            { text: "All mentioned", correct: true },
        ],
    },
    {
        question:
            "What does the prototype represent in the following JavaScript code? function JavaScript() {};",
        answers: [
            { text: "Not valid" },
            { text: "Prototype of a function" },
            { text: "Function JavaScript" },
            { text: "A custom constructor", correct: true },
        ],
    },
];
