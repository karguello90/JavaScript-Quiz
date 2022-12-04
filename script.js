//containers
let greeting=document.querySelector("#intro");
let startButton=document.querySelector("#start");
let introSection=document.querySelector("#introcontainer");
let questionSection=document.querySelector("#questionscontainer");
let beginQuestions=document.querySelector("#beginquestions");
let end=document.querySelector("#end");


let questionBank = [ {
    question: "Questions 1: which is?",
    selections: ["A. none"],
    answer: "A"
}
]

//timer
let remainingTime=document.getElementById("timer");
let remainingSeconds=60;
let questionNum=0;
let scoreSum=0;
let questionerCounter=1;

//countdown function
function timeCountDown() {
    let timerInt=setInterval(function () {
    remainingSeconds--;
    remainingTime.textContent="Time Left: "+remainingSeconds+" s";
    
    if (remainingSeconds <=0) {
        clearInterval(timerInt);
        remainingTime.textContent="Time Up";
        finish.textContent="Time Up";
        gameEnd();
    }
    else if (questionerCounter >= questionBank.length +1) {
        clearInterval(timerInt);
        gameEnd();
    }
},1000);
}

function quizStart() {
    introSection.style.display="none";
    questionSection.style.display="inherit";
    questionNum=0
    timeCountDown();
    questionStart(questionNum);
}

//function to start quiz
function questionStart (n) {
    beginQuestions.textContent=questionBank[q].question;
    selectButton1.textContent=questionBank[q].selections[0];
    selectButton1.textContent=questionBank[q].selections[1];
    selectButton1.textContent=questionBank[q].selections[2];
    selectButton1.textContent=questionBank[q].selections[3];
    questionNum= q;
}

startButton.addEventListener("click", quizStart);
