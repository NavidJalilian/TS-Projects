var guessInput = document.querySelector(".input-guess");
var guessButton = document.querySelector(".button-guess");
var form = document.querySelector("form");
var statusParagraph = document.querySelector(".status-indicator");
var section = document.querySelector("section");
var currentBox = document.querySelector(".currect-box");
var chanceLeft = document.querySelector(".chance-counter");
var highestScore = document.querySelector(".highest-score");
var resetBtn = document.querySelector(".reset");
var randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
var chances = 5;
var takes = 0;
chanceLeft.textContent = "".concat(chances);

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

resetBtn.addEventListener("click", function () {
  resetGame();
});

guessButton.addEventListener("click", function () {
  if (chances > 0) {
    var guess = parseInt(guessInput.value);
    game(guess);
    chances--;
    chanceLeft.textContent = "".concat(chances);
  }
  if (chances === 0) {
    resetBtn.focus();
    statusPClassChange("text-red-700");

    statusParagraph.textContent = "You lost!";
    deletePrevClasses();

    currentBox.classList.add("bg-red-500");
    currentBox.classList.add("text-red-100");
    guessButton.disabled = true;
  }
});
function game(guess) {
  currentBox.textContent = guess.toString();
  takes++;
  if (guess === randomNumber) {
    statusPClassChange("text-green-500");

    statusParagraph.textContent = "You guessed correctly!";
    deletePrevClasses();

    currentBox.classList.add("bg-green-500");
    resetBtn.focus();
    guessButton.disabled = true;
    if (takes < chances) {
      highestScore.textContent = "".concat(takes);
    }
  } else if (guess > randomNumber) {
    statusParagraph.textContent = "You guessed high!";
    deletePrevClasses();
    statusPClassChange("text-red-700");

    currentBox.classList.add("bg-red-200");
  } else {
    deletePrevClasses();
    statusPClassChange("text-yellow-600");

    statusParagraph.textContent = "You guessed low!";
    currentBox.classList.add("bg-yellow-200");
  }
}
function resetGame() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  chances = 5;
  takes = 0;
  guessInput.value = "";
  chanceLeft.textContent = "".concat(chances);
  guessInput.focus();
  statusPClassChange("text-green-700");

  statusParagraph.textContent = "Start Guessing...";
  deletePrevClasses();
  currentBox.classList.add("bg-white");
  currentBox.classList.add("text-green-800");
  guessButton.disabled = false;
}

function deletePrevClasses() {
  currentBox.classList.remove(
    "bg-red-200",
    "bg-red-500",

    "bg-green-500",
    "bg-yellow-200"
  );
}

function statusPClassChange(className = "") {
  statusParagraph.classList.remove(
    "text-green-700",
    "text-red-700",
    "text-yellow-600"
  );
  if (className) {
    statusParagraph.classList.remove("text-green-500");
    statusParagraph.classList.add(className);
  }
}
