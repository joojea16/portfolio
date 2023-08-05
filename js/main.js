const $banner = document.querySelectorAll(".banner");
const $left = document.querySelector("#left");
const $right = document.querySelector("#right");
const $arrow = document.querySelector("#arrow");
const $count = document.querySelector("#count");
let count = 1;
$right.addEventListener("click", () => {
  if (count >= 4) {
    return;
  }
  count++;
  $count.textContent = `${count}/4`;
  if (count === 2) {
    $banner[3].style.left = "-100%";
    $arrow.style.width = "32%";
  } else if (count === 3) {
    $banner[2].style.left = "-100%";
    $arrow.style.width = "37%";
  } else if (count === 4) {
    $banner[1].style.left = "-100%";
    $arrow.style.width = "42%";
  }
});

$left.addEventListener("click", () => {
  if (count <= 1) {
    return;
  }
  count--;
  $count.textContent = `${count}/4`;
  if (count === 3) {
    $banner[1].style.left = "0";
    $arrow.style.width = "37%";
  } else if (count === 2) {
    $banner[2].style.left = "0";
    $arrow.style.width = "32%";
  } else if (count === 1) {
    $banner[3].style.left = "0";
    $arrow.style.width = "27%";
  }
});

const $store = document.querySelectorAll("#store-title h1");

const $storeMain = document.querySelector("#store-main");

const $storeTitle = document.querySelector("#store-title2");
const $storeImg2 = document.querySelector("#store-img2");
const $storeImg = document.querySelector("#store-img");

$storeMain.addEventListener("mouseover", () => {
  $store[0].style.left = "20%";
  $store[1].style.right = "20%";
  $store[2].style.left = "30%";
  $store[3].style.right = "45%";
  $storeImg2.style.opacity = "1";
  $storeImg.style.height = "18%";
  $storeTitle.style.opacity = "1";
});

$storeMain.addEventListener("mouseout", () => {
  $store[0].style.left = "-60%";
  $store[1].style.right = "-70%";
  $store[2].style.left = "-70%";
  $store[3].style.right = "-60%";
  $storeImg.style.height = "0";
  $storeImg2.style.opacity = "0";
  $storeTitle.style.opacity = "0";
});

const $button = document.querySelectorAll(".header-menu");
const $menu = document.querySelectorAll(".menu");

for (let i = 0; i < 5; i++) {
  $button[i].addEventListener("click", () => {
    for (let j = 0; j < 5; j++) {
      if (i == j) {
        $menu[j].style.left = "0";
      } else {
        $menu[j].style.left = "-20%";
      }
    }
  });
}

const wrapper = document.querySelector("#pick");
let pressed = false;
let start = 0;
wrapper.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
  console.log(startX);
});
wrapper.addEventListener("mouseleave", function (e) {
  pressed = false;
});
window.addEventListener("mouseup", function (e) {
  pressed = false;
  wrapper.style.cursor = "grab";
});
wrapper.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }
  this.scrollLeft += startX - e.clientX;
});
