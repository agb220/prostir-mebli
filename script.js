"use strict";

// device definition
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

// MENU
const iconMenu = document.querySelector(" .header-menu__icon");
const menuBody = document.querySelector(" .menu-body");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

//Button
const buttons = document.querySelectorAll(".button_inline[data-goto]");
if (buttons.length > 0) {
  buttons.forEach((button) => {
    button.addEventListener("click", onButtonClick);
  });

  function onButtonClick(e) {
    const button = e.target;
    if (button.dataset.goto && document.querySelector(button.dataset.goto)) {
      const gotoBtn = document.querySelector(button.dataset.goto);
      const gotoBtnValue =
        gotoBtn.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBtnValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// site navigation

const menuLinks = document.querySelectorAll(".menu-item__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// scroll image

// const images = document.querySelectorAll(
//   ".page-presentation__block .page-presentation__img img"
// );
// const sliderLine = document.querySelector(
//   ".page-presentation__block .page-presentation__img"
// );
// let count = 0;
// let width;
// console.log("images.length", images.length);

// function init() {
//   console.log("resize");
//   width = document.querySelector(".page-presentation__block").offsetWidth;
//   console.log("width1", width);
//   sliderLine.style.width = width * images.length + "px";
//   images.forEach((item) => {
//     item.style.width = width + "px";
//     item.style.height = "auto";

//     console.log("width2", width);
//   });
//   rollSlider();
// }
// init();
// window.addEventListener("resize", init);

// document.querySelector(".arrow-next").addEventListener("click", function () {
//   count++;
//   if (count >= images.length) {
//     count = 0;
//   }

//   rollSlider();
// });

// document.querySelector(".arrow-prev").addEventListener("click", function () {
//   count--;
//   if (count < 0) {
//     count = images.length - 1;
//   }

//   rollSlider();
// });

// function rollSlider() {
//   sliderLine.style.transform = "translate(-" + count * width + "px)";
// }

// SWIPER

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoHeight: true,
  slidesPerView: 1.7,
  watchOverflow: true,
  spaceBetween: 3,
  loop: true,
  loopSlides: 3,
  speed: 800,
  // breakpoints: {
  //   440: {
  //     slidesPerView: 0.8,
  //   },
  //   992: {
  //     slidesPerView: 1,
  //   },
  // },
});
