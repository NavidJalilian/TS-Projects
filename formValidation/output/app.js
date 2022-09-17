"use strict";
const statusDiv = document.querySelector(".status");
const button = document.querySelector("button");
const form = document.querySelector("form");
// button.addEventListener("click", () => {
//   statusDiv.classList.toggle("scale-100");
// });

button.addEventListener("click", () => {
  for (const input of form) {
    if (input.validity.valid) continue;
    statusDiv.textContent = "Erorr: " + input.name + " is not Valid!";
    statusDiv.classList.add("scale-100");
    if (!input.validity.valid) return;
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
