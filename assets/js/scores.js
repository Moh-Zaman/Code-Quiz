// Variables
var clearEl = document.querySelector("#clear")
var highscoresEl = document.querySelector("#highscores")

// Clear Highscore
clearEl.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear("highscores")
    location.replace(location.href)
})

// Display Highscore

var existingHighscore = JSON.parse(localStorage.getItem("highscore")) || [];

existingHighscore.forEach(function(score, index) {
    var listItem = document.createElement("li");
    listItem.textContent = `${score.initial} - ${score.score}`;

    highscoresEl.appendChild(listItem);
});