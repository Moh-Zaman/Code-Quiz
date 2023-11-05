// Variables
var timerEl = document.querySelector("#time")
var startEl = document.querySelector("#start-screen")
var questionsEl = document.querySelector("#questions")
var endEl = document.querySelector("#end-screen")
var feedbackEl = document.querySelector("#feedback")
var startButton = document.querySelector("#start")
var question1El = document.querySelector("#question-1")
var submitEl = document.querySelector("#submit")
var initialEl = document.querySelector("#initials")


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

// Timer
var time = 60;

function countdown () {
    var timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time + "s";

        if(time === 0) {
            clearInterval(timerInterval);
            hide(questionsEl);
            show(endEl);
        }
    }, 1000);
}

// Pressing Start

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    countdown();
    hide(startEl);
    show(questionsEl);
    show(question1El);
    show(feedbackEl);    
});

// Enter Highscore
submitEl.addEventListener("click", function(event) {
  event.preventDefault();
  var leaderboard = {
    initial: initialEl.value.trim(),
    score: points
  };

  var existingHighscore = JSON.parse(localStorage.getItem("highscore")) || [];

  existingHighscore.push(leaderboard)

  localStorage.setItem("highscore", JSON.stringify(existingHighscore));

  feedbackEl.textContent = "Highscore Submitted!"
})
