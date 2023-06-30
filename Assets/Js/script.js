var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myquestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
    myQuestions,
    quizContainer,
    resultsContainer,
    resultsContainer,
    submitButton) {
    
    var output = [];
    var answers;

    for (var i = 0; i < myQuestions.length; i++){
        answers.push(
            
            

        )
    }
}
var myquestion = [
    {
        question:
            "To access an HTML element from JavaScript, you can use this method",
        answers: {
            a: "getElementById",
            b: "getElementbyclass",
            c: "getElementbyhybrid",
        },
        correntAnswer: "a",
    },
];
var myquestion = [
    {
        question:
            "What is the result of the following expression in Javascript?"(
                typeof null
            ),
        answers: {
            a: "null",
            b: "object",
            c: "string",
        },
        correntAnswer: "b",
    },
];
var myquestion = [
    {
        question:
            "Which of the following is an example of truth value in Javascript?",
        answers: {
            a: "null",
            b: "NaN",
            c: "true",
        },
        correntAnswer: "c",
    },
];
var myquestion = [
    {
        question: "What does the 'JSON.parse()' function do in JavaScript?",
        answers: {
            a: "Converts a JSON string to a JavaScript object",
            b: "Parses a JSON object and returns JavaScript string",
            c: "Parses a Javascript array and returns a JSOn object",
        },
        correntAnswer: "a",
    },
];
