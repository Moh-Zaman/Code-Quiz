// Variables
var timerEl = document.querySelector("#time")
var startEl = document.querySelector("#start-screen")
var questionsEl = document.querySelector("#questions")
var endEl = document.querySelector("#end-screen")
var feedbackEl = document.querySelector("#feedback")
var startButton = document.querySelector("#start")
var question1El = document.querySelector("#question-1")


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
var time = 75;

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



