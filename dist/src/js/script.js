//scroll

window.onscroll = function () {
  const header = document.getElementById("nav");
  const scroll = header.offsetTop;
  const btnUp = document.getElementById("btnUp");
  if (window.pageYOffset > scroll) {
    header.classList.add("sticky");
    btnUp.classList.add("flex");
    btnUp.classList.remove("hidden");
  } else {
    header.classList.remove("sticky");
    btnUp.classList.remove("flex");
    btnUp.classList.add("hidden");
  }
};

// humburger
const humburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
humburger.addEventListener("click", () => {
  humburger.classList.toggle("humberger-active");
  nav.classList.toggle("hidden");
});

// klik di luar menu
window.addEventListener("click", (e) => {
  if (e.target !== humburger && e.target !== nav) {
    humburger.classList.remove("humberger-active");
    nav.classList.add("hidden");
  }
});
// dark modul
const darkMode = document.getElementById("dark-toggle");
const html = document.querySelector("html");
darkMode.addEventListener("click", () => {
  html.classList.toggle("dark");
});
