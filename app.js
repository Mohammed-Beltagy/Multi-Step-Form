const slider = document.getElementById("slider");
let step = 1,
  stepsCount = 5;
function moveSlider() {
  slider.style.transform = `translateX(-${((step - 1) * 100) / stepsCount}%)`;
}
moveSlider();
const next = document.getElementById("next"),
  back = document.getElementById("back");
next.onclick = function () {
  if (step >= stepsCount) {
    return;
  }
  step++;
  moveSlider();
};
back.onclick = function () {
  if (step <= 1) {
    return;
  }
  step--;
  moveSlider();
};
