const statusDiv = document.querySelector(".status")! as HTMLDivElement;
const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("click", () => {
  statusDiv.classList.toggle("scale-100");
});
