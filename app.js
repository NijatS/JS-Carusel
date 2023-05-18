const left = document.querySelector(".carusel>img:first-child");
const right = document.querySelector(".carusel>img:nth-child(2)");
const div = document.querySelectorAll(".carusel > div");
div[0].style.right = "0px";
left.addEventListener("click", () => {
  if (div[0].style.right == "0px") {
    div.forEach((element) => {
      moveStartFromRight(element);
    });
    return;
  }
  div.forEach((element) => {
    moveRight(element);
  });
});

right.addEventListener("click", () => {
  if (div[0].style.right == "1200px") {
    div.forEach((element) => {
      moveStartFromLeft(element);
    });
    return;
  }
  div.forEach((element) => {
    moveLeft(element);
  });
});

function moveLeft(element) {
  style = getComputedStyle(element);
  let position = style.right;
  position = parseInt(position) + 400 + "px";
  element.style.right = position;
}
function moveStartFromLeft(element) {
  style = getComputedStyle(element);
  let position = style.right;
  position = parseInt(position) - 1200 + "px";
  element.style.right = position;
}
function moveStartFromRight(element) {
  style = getComputedStyle(element);
  let position = style.right;
  position = parseInt(position) + 1200 + "px";
  element.style.right = position;
}
function moveRight(element) {
  style = getComputedStyle(element);
  let position = style.right;
  position = parseInt(position) - 400 + "px";
  element.style.right = position;
}
