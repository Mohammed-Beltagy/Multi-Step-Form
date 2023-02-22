const slider = document.getElementById("slider");
let step = 1,
  stepsCount = 4;
function moveSlider() {
  slider.style.transform = `translateX(-${((step - 1) * 100) / stepsCount}%)`;
}
moveSlider();
