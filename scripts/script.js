// JavaScript Document
const body = document.querySelector("body");

function bijScroll() {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 300 || window.pageYOffset < 2000) {
    body.classList.add("hide");
  }

  if (window.pageYOffset < 300 || window.pageYOffset > 2000) {
    body.classList.remove("hide");
  }
}

window.addEventListener("scroll", bijScroll);
