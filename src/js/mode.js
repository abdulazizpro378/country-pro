const Modebtn = document.querySelector(".header__dark-mode");
const body = document.querySelector("body");
const modeFormlocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeFormlocal) {
  body.classList.add("dark-mode");
}

Modebtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeFormlocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});
