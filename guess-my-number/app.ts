const randomNumber = Math.floor(Math.random() + 1 * 20);
const guessInput = document.querySelector(".input-guess");
const guessButton = document.querySelector(".button-guess");
const form = document.querySelector("form");

form!.addEventListener("submit", e => {
  e.preventDefault();
});
// typescript for event on click
guessButton?.addEventListener("click", () => {
  const guess = parseInt(guessInput!.value);
  console.log(guess);
});
