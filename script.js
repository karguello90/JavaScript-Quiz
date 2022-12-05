//containers
let startButton=document.querySelector("#start");
let greeting=document.querySelector("#intro");
let questionSection=document.querySelector("#questions");
let beginQuestions=document.querySelector("#beginquestions");
let end=document.querySelector("#end");

let questionButtons=document.querySelectorAll(".Selection");
let btnAnswer1=document.querySelector("#selectbtn1");
let btnAnswer2=document.querySelector("#selectbtn2");
let btnAnswer3=document.querySelector("#selectbtn3");
let btnAnswer4=document.querySelector("#selectbtn4");

let answerLine=document.querySelector("#answerline");

let questionBank = [
    { 
        question: "Question 1: If brackets are added, which of the following is an array?",
        selection: ["A. Lions, Tigers, Bears", "B. True", "C. ==", "D. All of the above"],
        answer: "A"
    },
    { 
        question: "Question 2: Which file extension is used for JavaScript?",
        selection: ["A. .Txt", "B. .Html", "C. .Jpeg", "D. .Js"],
        answer: "D"
    },
    { 
        question: "Question 3: Which of the following makes a message appear in the console?",
        selection: ["A. Functions", "B. Math.Floor", "C. console.log", "D. None of these"],
        answer: "C"
    },
    { 
        question: "Question 4: Which of the following declares a variable?",
        selection: ["A. Using var", "B. Using let", "C. Using const", "D. All of the above"],
        answer: "D"
    },
];

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
    greeting.style.display="none";
    questions.style.display="block";
    questionNum=0
    timeCountDown();
    questionStart(questionNum);
}

//function to start quiz
function questionStart (q) {
    beginQuestions.textContent=questionBank[q].question;
    selectButton1.textContent=questionBank[q].selection[0];
    selectButton1.textContent=questionBank[q].selection[1];
    selectButton1.textContent=questionBank[q].selection[2];
    selectButton1.textContent=questionBank[q].selection[3];
    questionNum= q;
}

//function to shows user if answer is correct or incorrect
function answerChecker(event) {
    event.preventDefault();
    answerChecker.style.display="block";
    outOfTime(function () {
        answerChecker.style.display="none";
}, 1000);
if (questionBank[questionNum].answer==event.target.value) {
    answerChecker.textContent="Success!";
    scoreSum=scoreSum+1;
}
else {
    remainingSeconds=remainingSeconds-5;
    answerChecker.textContent="Incorrect, the answer is " + questionBank[questionNum].answer+".";
}
if (questionNum<questionBank.length-1) {
    questionStart(questionNum+1);
} else {
gameEnd();
}
sumQuestion++;
}

function gameEnd() {
    questionSection.style.display="none";
    scoreDisplay.style.display="block";
    console.log(scoreDisplay);
    endScore.textContent="Your score:"+endScore;
    remainingTime.style.display="none";
};


startButton.addEventListener("click", quizStart);
