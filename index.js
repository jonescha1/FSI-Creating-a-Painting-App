const painting = document.querySelector(".painting");
const palette = document.querySelector(".palette");

let selectedColor = null;

painting.addEventListener("click", function (e) {
  e.target.style.backgroundColor = selectedColor;
});

palette.addEventListener("click", function (e) {
  selectedColor = e.target.id;
});
