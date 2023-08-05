const $bannerImg = document.querySelectorAll(".banner-img");
const $bannerLeft = document.querySelector("#banner-left");
const $bannerRight = document.querySelector("#banner-right");
let count = 0;

$bannerLeft.addEventListener("click", () => {
  if (count >= 2) {
    return;
  }
  count++;
  if (count == 1) {
    $bannerImg[2].style.left = "-100%";
  } else if (count == 2) {
    $bannerImg[1].style.left = "-100%";
  }
});

$bannerRight.addEventListener("click", () => {
  if (count <= 0) {
    return;
  }
  count--;
  if (count == 1) {
    $bannerImg[1].style.left = "0";
  } else if (count == 0) {
    $bannerImg[2].style.left = "0";
  }
});

const $pickImg = document.querySelector("#pick-img");

let pressed = false;
let startX = 0;
$pickImg.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
});
$pickImg.addEventListener("mouseleave", function (e) {
  pressed = false;
});
window.addEventListener("mouseup", function (e) {
  pressed = false;
  $pickImg.style.cursor = "grab";
});
$pickImg.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }
  this.scrollLeft += startX - e.clientX;
});

const $ham = document.querySelector("#hamburger");
const $menu = document.querySelector("#menu");
const $ul = document.querySelector("#menu ul");

$ham.addEventListener("click", () => {
  $menu.style.height = "580px";
  setTimeout(() => {
    $ul.style.display = "block";
  }, 1200);
});

$menu.addEventListener("click", () => {
  $ul.style.display = "none";
  $menu.style.height = "0";
});

const $slider = document.querySelectorAll(".slider");
const $pick = document.querySelectorAll(".content-pick");
const $content = document.querySelector("#content");

for (let i = 0; i < $slider.length; i++) {
  $slider[i].addEventListener("click", () => {
    for (let j = 0; j < $pick.length; j++) {
      if (i === j) {
        $content.style.display = "block";
        $pick[j].style.display = "block";
      }
    }
  });
}

const $close = document.querySelectorAll(".close");

for (let k = 0; k < $close.length; k++) {
  $close[k].addEventListener("click", () => {
    $content.style.display = "none";
    $pick[k].style.display = "none";
  });
}
