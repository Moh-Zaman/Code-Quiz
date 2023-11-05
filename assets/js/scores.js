// Variables
var clearEl = document.querySelector("#clear")
var highscoresEl = document.querySelector("#highscores")

// Clear Highscore
clearEl.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear("highscores")
})

