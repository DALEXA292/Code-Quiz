var welcome = document.querySelector("#intro");
var startBtn = document.querySelector("#startButton");
var introPage =document.querySelector("#initial_Pg");

var questionPage = document.querySelector("#questions");
var askQuestion = document.querySelector("#questionAsked");

var reactButtons = document.querySelectorAll(".choiceButton");
var answerBtn1 = document.querySelector("#answerBtn1");
var answerBtn2 = document.querySelector("#answerBtn2");
var answerBtn3 = document.querySelector("#answerBtn3");
var answerBtn4 = document.querySelector("#answerBtn4");

var checkLine = document.querySelector("#AnswerCheck");
var scoreBoard = document.querySelector("#submitting");
var finalScore = document.querySelector("#finalScore");
var userInitial =document.querySelector("#initial");

var submitBtn =document.querySelector("#submitButton");
var highScorePage =document.querySelector("#highScore");
var scoreRecord =document.querySelector("#score");
var scoreCheck =document.querySelector("#high-score");
var finish =document.querySelector("#Alldone");

var backBtn =document.querySelector("#backBtn");
var clearBtn=document.querySelector("#clearBtn");

//questions

var questionList = [
    {
        question: "Commonly used data types DO Not include:",
        choices: ["1. strings", "2. booleans", "3. alerts","4. numbers"],
        answer: "2"
    },
    {
        question: "The condition in an if / else statemnt is enclosed with ______.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis","4. square brackets"],
        answer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans","4. all of the above"],
        answer: "4"
    },
    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        choices: ["1. commas", "2. curly brakets", "3. quotes","4. parenthesis"],
        answer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops","4. console log"],
        answer: "2"
    }
  
];

//timer variables

var timeRemaining = document.getElementById(Time);

var secondsRemaing = 75;
var questionNum = 0;
var ScoreTotal = 0;
var questiontally = 1;

//Funtion to initiate timer when one presses start button

function countingdown () {
    
    var timeInterval = IntervalSet(function () {
        
       secondsRemaing--;
       timeRemaining.textContent = "Time: " + secondsRemaing + "s";
       
       if (secondsRemaing <=0) {
        clearTimeout(timeInterval);
        finish.textContent = "Time is up!";
        gameOver();
       
    } else if(questiontally >= sourceQuestion.lenght +1) {
        clearTimeout(timeInterval);
        gameOver();
    }

}, 1000);

}

//start quiz button 

function beginQuiz (n) {
    InitialPg.style.display = "none";
    questionPage.style.display = "block";
    questionNumber = 0
    countingdown();
    displayQuestion(questionNumber);
}

//show question

function displayQuestion (n){
    askQuestion.textContent = questionList[n].question
    answerBtn1.textContent = sourceQuestion[n].choices[0];
    answerBtn2.textContent = sourceQuestion[n].choices[1];
    answerBtn3.textContent = sourceQuestion[n].choices[2];
    answerBtn4.textContent = sourceQuestion[n].choices[3];
    questionNumber = n;
}

//show if answer is correct or wrong