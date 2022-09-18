"use strict";
const statusDiv = document.querySelector(".status");
const button = document.querySelector("button");
const form = document.querySelector("form");
const eyePassword = document.querySelector(".eye-container");
const passwordInput = form[4];
const svgEye = document.querySelector(".cls-2");
button.addEventListener("click", () => {
  for (const input of form) {
    if (input.validity.valid) continue;
    statusDiv.textContent = "Erorr: " + input.name + " is not Valid!";
    statusDiv.classList.add("scale-100");
    return;
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusDiv.textContent = "Sending...";
  statusDiv.classList.add("pending", "scale-100");
});
eyePassword.onclick = () => {
  svgEye.classList.toggle("fill-gray-900");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else passwordInput.type = "password";
  passwordInput.focus();
};
//password => text
// text=>pass
