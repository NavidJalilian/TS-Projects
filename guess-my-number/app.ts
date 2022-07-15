const guessInput = document.querySelector(".input-guess") as HTMLInputElement;
const guessButton = document.querySelector(
  ".button-guess"
) as HTMLButtonElement;
const form = document.querySelector("form") as HTMLFormElement;
const statusParagraph = document.querySelector(
  ".status-indicator"
) as HTMLLIElement;
const section = document.querySelector("section") as HTMLElement;
const currentBox = document.querySelector(".currect-box") as HTMLElement;
const chanceLeft = document.querySelector(".chance-counter") as HTMLElement;
const highestScore = document.querySelector(".highest-score") as HTMLElement;
const resetBtn = document.querySelector(".reset") as HTMLElement;

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
let chances = 5;
let takes = 0;

chanceLeft.textContent = `${chances}`;
form.addEventListener("submit", e => {
  e.preventDefault();
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

guessButton.addEventListener("click", () => {
  if (chances > 0) {
    const guess = parseInt(guessInput.value);
    game(guess);
    chances--;
    chanceLeft.textContent = `${chances}`;
  }

  if (chances === 0) {
    resetBtn.focus();
    statusParagraph.classList.add("text-red-500");

    statusParagraph.textContent = "You lost!";
    currentBox.classList.remove("bg-red-200", "bg-yellow-200", "bg-green-500");
    currentBox.classList.add("bg-red-500");
    currentBox.classList.add("text-red-100");
    guessButton.disabled = true;
  }
});

function game(guess: number) {
  currentBox.textContent = guess.toString();
  takes++;
  if (guess === randomNumber) {
    statusParagraph.textContent = "You guessed correctly!";
    currentBox.classList.remove("bg-red-200", "bg-yellow-200");
    currentBox.classList.add("bg-green-500");
    resetBtn.focus();
    guessButton.disabled = true;

    if (takes < chances) {
      highestScore.textContent = `${takes}`;
    }
  } else if (guess > randomNumber) {
    statusParagraph.textContent = "You guessed  high!";
    currentBox.classList.add("bg-red-200");
  } else {
    statusParagraph.textContent = "You guessed  low!";
    currentBox.classList.add("bg-yellow-200");
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  chances = 5;
  takes = 0;
  chanceLeft.textContent = `${chances}`;
  statusParagraph.textContent = "";
  currentBox.classList.remove("bg-red-500", "bg-green-500", "bg-yellow-200");
  currentBox.classList.add("bg-white");
  currentBox.classList.add("text-green-800");
  guessButton.disabled = false;
}
