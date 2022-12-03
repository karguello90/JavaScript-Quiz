mainPage = document.getElementById("Questions");
gameStart = document.getElementById("Start-Button").addEventListener("click", gameStart);


//One minute timer
const startingTime = 1;
//60 seconds timer
let time = startingTime * 60;
let timeInterval;
//Array for quiz questions
let quizQuestions = [
    {
        question:
    },
    {
        question:
    }
]

function gameStart() {
    timeInterval = setInterval (timeStart, 1000);
    questionBegin();
}

function timeStart() {
    if 
}