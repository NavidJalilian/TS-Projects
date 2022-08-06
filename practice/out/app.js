"use strict";
document.addEventListener("click", (e) => {
  e.target.classList.add("go");
  setTimeout(() => {
    e.target.classList.remove("go");
  }, 400);
});
