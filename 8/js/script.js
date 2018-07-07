var link = document.querySelector(".button-popup");
var popup = document.querySelector(".modal");
var form = popup.querySelector("form");
var indata = popup.querySelector("[name=indata]");
var outdata = popup.querySelector("[name=outdata]");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");

document.documentElement.classList.replace("no-js", "js");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!indata.value || !outdata.value || !adult.value || !child.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
});
