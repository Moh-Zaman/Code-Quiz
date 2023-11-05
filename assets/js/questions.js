// Variables
var questionsEl = document.querySelector("#questions")
var endEl = document.querySelector("#end-screen")
var feedbackEl = document.querySelector("#feedback")
var question1El = document.querySelector("#question-1")
var question2El = document.querySelector("#question-2")
var question3El = document.querySelector("#question-3")
var question4El = document.querySelector("#question-4")
var question5El = document.querySelector("#question-5")
var wrong1El = document.querySelectorAll("#wrong-1")
var wrong2El = document.querySelectorAll("#wrong-2")
var wrong3El = document.querySelectorAll("#wrong-3")
var wrong4El = document.querySelectorAll("#wrong-4")
var wrong5El = document.querySelectorAll("#wrong-5")
var correct1El = document.querySelector("#correct-1")
var correct2El = document.querySelector("#correct-2")
var correct3El = document.querySelector("#correct-3")
var correct4El = document.querySelector("#correct-4")
var correct5El = document.querySelector("#correct-5")
var endEl = document.querySelector("#end-screen")
var endPoints = document.querySelector("#final-score")

// Show/Hide functions
function hide (elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
  }

function show (elements, specifiedDisplay) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = specifiedDisplay || 'block';
  }
}

// Loop through questions

var questions = [
    {
      questionEl: question1El,
      correctAnswerEl: correct1El,
      wrongAnswersEl: wrong1El,
      nextQuestionEl: question2El,
    },
    {
      questionEl: question2El,
      correctAnswerEl: correct2El,
      wrongAnswersEl: wrong2El,
      nextQuestionEl: question3El,
    },
    {
      questionEl: question3El,
      correctAnswerEl: correct3El,
      wrongAnswersEl: wrong3El,
      nextQuestionEl: question4El,
    },
    {
      questionEl: question4El,
      correctAnswerEl: correct4El,
      wrongAnswersEl: wrong4El,
      nextQuestionEl: question5El,
    },
    {
      questionEl: question5El,
      correctAnswerEl: correct5El,
      wrongAnswersEl: wrong5El,
      nextQuestionEl: endEl,
    },

];
  
// Feedback

  function showFeedback(event) {
    feedbackEl.textContent = event;
    setTimeout(() => {
        feedbackEl.textContent = "";
    }, 3000);
  }

// Points

var points = localStorage.getItem("points")

endPoints.textContent = points

// Looping Questions

  function handleQuestion(question) {
    question.correctAnswerEl.addEventListener("click", function (event) {
      event.preventDefault();
      showFeedback("Correct!");
      setTimeout(() => {
        hide(question.questionEl);
        show(question.nextQuestionEl);
      }, 3000);

      points ++;
      localStorage.setItem("points", points)
      endPoints.textContent = points

      var sound = new Audio("assets/sfx/correct.wav")
      sound.play()
    });
  
    question.wrongAnswersEl.forEach(function (wrongAnswer) {
      wrongAnswer.addEventListener("click", function (event) {
        event.preventDefault();
        showFeedback("Wrong!");
        setTimeout(() => {
          hide(question.questionEl);
          show(question.nextQuestionEl);
        }, 3000);
        
        var sound = new Audio("assets/sfx/incorrect.wav")
        sound.play()
      });
    });
  }

questions.forEach(handleQuestion);

// Deletes Points in LocalStorage on Refresh
window.onbeforeunload = function () {
    localStorage.removeItem("points");
};





  
