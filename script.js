//containers
let greeting=document.querySelector("#intro");
let startButton=document.querySelector("#start");
let introSection=document.querySelector("#introcontainer");
let questionsSection=document.querySelector("#questionscontainer");
let beginQuestions=document.querySelector("#beginquestions");

//buttons
let selecButtons=document.querySelector()
let selectButton1=document.querySelector(#selectbtn1);
let selectButton2=document.querySelector(#selectbtn2);
let selectButton3=document.querySelector(#selectbtn3);
let selectButton4=document.querySelector(#selectbtn4);

//timer
let remainingTime=document.getElementById("timer");
let remainingSeconds=60;
let questionNum=0;
let scoreSum=0;
let questionerCounter=1;

let questionBank

//countdown function
fucntion timeCountDown() {
    let timerInt=intervalSet(function () {
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

function quizStart () {
    introContainer.style.display="none";
    questionContainer.style.display="block";
    questionNum=0
    timeCountDown();
    questionReveal(questionNum);

//function to start quiz
function questionStart (n) {
    beginQuestions.textContent=questionBank[q].question;
    selectButton1.textContent=questionBank[q].selections[0];
    selectButton1.textContent=questionBank[q].selections[1];
    selectButton1.textContent=questionBank[q].selections[2];
    selectButton1.textContent=questionBank[q].selections[3];
    questionNum= q;
}

