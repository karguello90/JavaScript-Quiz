let introContainerEl = document.getElementById("start-questions");
let questionsContainerEl = document.getElementById("questions-container");
let endingContainerEl = document.getElementById("ending-container");
let highscoresContainerEl = document.getElementById("highscore-container");

let 
let score = 0;
let timeLeft;
let gameOver
timerEl.innerText = 0;

let topScores = [];

//Array for quiz questions
let quizQuestions = [
    {
        question: test question
        answer: test answer
        choices: [{choice '1. 1st choice'}]

let gameStart = function() {
    introContainerEl.classList.add('hide');
    introContainerEl.classList.remove('show');
    questionsContainerEl.classList.remove('hide');
    questionsContainerEl.classList.add('show');
    timeOn()
    qeuestionOn()
}
    