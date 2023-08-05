class FolderScroll {
  constructor(wrapper, sticky) {
    this.wrapper = wrapper;
    this.sticky = sticky;
    this.children = this.sticky.querySelectorAll(".section");
    this.length = this.children.length;
    this.headerVh = 7;
    this.contentVh = 92 - this.headerVh * this.length;
    this.start = 0;
    this.end = 0;
  }

  init() {
    this.start = this.wrapper.offsetTop + 100;
    this.end =
      this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight - 100;

    this.children.forEach((child, i) => {
      child.style.bottom = -(100 - this.headerVh * (this.length - i)) + "vh";
      child.querySelector(".stitle").style.height = this.headerVh + "vh";
      child.querySelector(".content").style.height = this.contentVh + "vh";
    });
  }

  animate() {
    this.children.forEach((child, i) => {
      const unit = (this.end - this.start) / this.length;
      const s = this.start + unit * i + 100;
      const e = this.start + unit * (i + 1);

      if (scrollY <= s) {
        child.style.transform = `translate3d(0, 0, 0)`;
      } else if (scrollY >= e) {
        child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`;
      } else {
        child.style.transform = `translate3d(0, ${
          ((scrollY - s) / (unit - 100)) * -this.contentVh
        }%, 0)`;
      }
    });
  }
}

const mainContent1 = document.querySelector(".main-content-1");
const sticky = document.querySelector(".sticky");
const folderScroll = new FolderScroll(mainContent1, sticky);
folderScroll.init();

window.addEventListener("resize", () => {
  folderScroll.init();
});
window.addEventListener("scroll", () => {
  folderScroll.animate();
});
//
//
//
//
new TypeIt("#htitle", {
  loop: true,
  speed: 400,
  startDelay: 2000,
})
  .type("개발자를 꿈꾸는", { delay: 500 })
  .delete(8)
  .type("신입개발자")
  .go();

const mainGroup = document.querySelector(".main");
const mainPaths = mainGroup.querySelectorAll("path");
mainPaths.forEach((path, index) => {
  const length = path.getTotalLength();
  path.style.setProperty("--length", length);

  path.style.setProperty("--duration", length * 3 + "ms");
});
const bgGroup = document.querySelector(".main-bg");
const bgPaths = bgGroup.querySelectorAll("path");
bgPaths.forEach((path, index) => {
  const length = path.getTotalLength();
  path.style.setProperty("--length", length);

  path.style.setProperty("--duration", length * 4 + "ms");
});

const $jcons = document.querySelectorAll(".jcons");
const $study = document.querySelector("#study");
const $content = document.querySelectorAll(".study-content");
const $close = document.querySelectorAll(".ske-close");
for (let i = 0; i < $jcons.length; i++) {
  $jcons[i].addEventListener("click", () => {
    $study.style.display = "block";
    for (let j = 0; j < $content.length; j++) {
      if (i === j) {
        $content[j].style.display = "block";
      } else {
        $content[j].style.display = "none";
      }
    }
  });
}
for (let k = 0; k < $close.length; k++) {
  $close[k].addEventListener("click", () => {
    $study.style.display = "none";
  });
}

const $pop = document.querySelector("#pop");
const $popButton = document.querySelector("#pop-button");

$popButton.addEventListener("click", () => {
  $pop.style.display = "none";
});
