const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-content");
window.addEventListener("resize", function () {
  if (window.innerWidth <= 750) {
    nav.classList.add("hidden");
    menu.classList.remove("hidden");
  } else {
    nav.classList.remove("hidden");
    menu.classList.add("hidden");
  }
});

if (window.innerWidth <= 750) {
  nav.classList.add("hidden");
  menu.classList.remove("hidden");
}
else{
    nav.classList.remove("hidden");
  menu.classList.add("hidden");
}

menu.addEventListener("click", function () {
  nav.classList.toggle("nav");
});
