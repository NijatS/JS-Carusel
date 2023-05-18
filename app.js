const left = document.querySelector(".left");
const right = document.querySelector(".carusel img:nth-child(2)");
const div = document.querySelectorAll(".carusel > div");
div[0].style.right = "0px";

left.addEventListener("click", () => {
  console.log(left.classList);
  left.classList.toggle = "noClick";
  console.log(left.classList);
  if (div[0].style.right == "0px") {
    div.forEach((element) => {
      moveStartFromRight(element);
    });
    return;
  }
  div.forEach((element) => {
    moveRight(element);
  });
  // left.classList.remove = "noClick";
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

async function moveLeft(element) {
  style = getComputedStyle(element);
  let position = style.right;
  position = parseInt(position) + 400 + "px";
  element.style.right = position;
}
async function moveStartFromLeft(element) {
  style = getComputedStyle(element);
  let position = style.right;
  position = parseInt(position) - 1200 + "px";
  element.style.right = position;
}
async function moveStartFromRight(element) {
  style = getComputedStyle(element);
  let position = style.right;
  position = parseInt(position) + 1200 + "px";
  element.style.right = position;
}
async function moveRight(element) {
  style = getComputedStyle(element);
  let position = style.right;
  position = parseInt(position) - 400 + "px";
  element.style.right = position;
}
