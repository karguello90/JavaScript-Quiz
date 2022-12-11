//containers
let startButton=document.querySelector("#start");
let greeting=document.querySelector("#intro");
let questionSection=document.querySelector("#questions");
let beginQuestions=document.querySelector("#beginquestions");

let questionButtons=document.querySelectorAll(".selectionbutton");
let btnAnswer1=document.querySelector("#selectbtn1");
let btnAnswer2=document.querySelector("#selectbtn2");
let btnAnswer3=document.querySelector("#selectbtn3");
let btnAnswer4=document.querySelector("#selectbtn4");

let answerLine=document.querySelector("#answer");
let scoreDisplay=document.querySelector("#complete");
let endScore=document.querySelector("#endscore");
let playerInitials=document.querySelector("#initials");

let returnButton=document.querySelector("#returnBTN")
let topScoreDisplay=document.querySelector("#topscore")
let recordTop=document.querySelector("#scorerecorder")
let showList=document.querySelector("#scoreboardcheck")
let end=document.querySelector("#end");
let submitButton=document.querySelector("#completeBTN")
let resetButton=document.querySelector("#wipeBTN")

let questionBank = [
    { 
        question: "Q1: Which of the following is an array?",
        selection: ["A. [Lions, Tigers, Bears]", "B. True", "C. ==", "D. All of the above"],
        answer: "A"
    },
    { 
        question: "Q2: Which file extension is used for JavaScript?",
        selection: ["A. .Txt", "B. .Html", "C. .Jpeg", "D. .Js"],
        answer: "D"
    },
    { 
        question: "Q3: Which of the following makes a message appear in the console?",
        selection: ["A. Functions", "B. Math.Floor", "C. console.log", "D. None of these"],
        answer: "C"
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

//function begins the quiz sequence, timer starts
function quizStart() {
    greeting.style.display="none";
    questions.style.display="block";
    questionNum=0
    timeCountDown();
    questionStart();
}

//function to show questions page
function questionStart () {
    //questionNum++;
    beginQuestions.textContent=questionBank[questionNum].question;
    selectButton1.textContent=questionBank[questionNum].selection[0];
    selectButton2.textContent=questionBank[questionNum].selection[1];
    selectButton3.textContent=questionBank[questionNum].selection[2];
    selectButton4.textContent=questionBank[questionNum].selection[3];
    
}

//function to shows user if answer is correct or incorrect
function answerChecker(event) {
    console.log("click");
    //answerLine.style.display="none";
//     outOfTime(function () {
//      answerLine.style.display="none";
//  }, 1000);
 if (questionBank[questionNum].answer==event.target.value) {
     answerLine.textContent="Success!";
     scoreSum=scoreSum+1;
     
     //questionNum++;
     questionStart();
 }
 else {
     remainingSeconds=remainingSeconds-1;
     answerLine.textContent="Incorrect, the answer is " + questionBank[questionNum].answer+" .";
 }
 answerLine.removeAttribute("class");
 setTimeout(function(){
    answerLine.setAttribute("class", "hide");
 },1000)
 if (questionNum<questionBank.length-1) {
     questionStart();
 } else {
 gameEnd();
 }
questionNum++;
}

//will end game when all questions are answered or time runs out, end of game
function gameEnd() {
    questionSection.style.display="none";
    scoreDisplay.style.display="block";
    console.log(scoreDisplay);
    endScore.textContent="Your score:"+endScore;
    remainingTime.style.display="none";
};

//will display current initials and score from the local storage
function scoreShow() {
    let showList=localStorage.getItem("HighScores");
    if (showList !==null) {
        listRefresh=JSON.parse(showList);
        return listRefresh;
} else {
    listRefresh=[];
}
return listRefresh;
};

//will add current score
function scoreCreate () {
    scoreRecorder.innerHTML="";
    scoreRecorder.style.display="block";
    let topScores=sort();
    //will display top 5 scores
    let fiveBest=topScores.slice(0,5);
    for (var i=0; i < fiveBest.length;i++) {
        let object=fiveBest[i];
    //score will show on scoreboard
    let li=document.createElement("li");
    li.textContent=object.user+"-"+object.score;
    li.setAttribute("data-index",i);
    savedScores.appendChild(li);
}
};

//organize score and ranking on the score list
function organize () {
    let unorganizedList=scoreShow();
    if (scoreShow==null) {
        return;
    } else {
    unorganizedList.sort(function(a,b) {
    return b.score-a.score; 
})
return unorganizedList;
}};

//add new scores and intials to local storage
function addObject (q) {
    let createdList=scoreShow();
    createdList.push(q);
    localStorage.setItem("HighScores")
    if (createdList !==null) {
    newList=JSON.parse(createdList);
    return newList;
    } else {
        newList=[];
    }
    return newList;
};

//records score and saves player initals
function scoreRecorder () {
    let scoreObject={
        player: playerInitial.value,
        score: scoreSum
    }
    addObject(scoreObject);
    scoreCreate();
}

//litsener to start quiz
startButton.addEventListener("click", quizStart);

//litsener for answer buttons, goes to following question
questionButtons.forEach(function(){
    addEventListener("click", answerChecker);
});

submitButton.addEventListener("click",function(event) {
    event.preventDefault();
    scoreDisplay.style.display="block";
    greeting.style.display="none";
    topScoreDisplay.style.display="block";
    questionSection.style.display="none";
    scoreRecorder();
});

//View page for top scores
showList.addEventListener("click", function(event) {
    event.preventDefault();
    scoreDisplay.style.display="none";
    greeting.style.display="none";
    topScoreDisplay="block";
    questionSection.style.display="none";
    location.reload();
});

//button to go back to greeting and play again
returnButton.addEventListener("click",function(event) {
    event.preventDefault();
    scoreDisplay.style.display="none";
    greeting.style.display="block";
    topScoreDisplay.style.display="none";
    questionSection.style.display="none";
    location.reload();
});

//wipe local storage and reset page shows
resetButton.addEventListener("click",function(event) {
    event.preventDefault();
    localStorage.clear();
    scoreCreate();
});
