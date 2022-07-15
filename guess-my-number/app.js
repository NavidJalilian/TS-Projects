var randomNumber = Math.floor(Math.random() + 1 * 20);
var guessInput = document.querySelector(".input-guess");
var guessButton = document.querySelector(".button-guess");
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
});
// typescript for event on click
guessButton === null || guessButton === void 0 ? void 0 : guessButton.addEventListener("click", function (e) {
    var guess = parseInt(guessInput.value);
    console.log(guess);
});
