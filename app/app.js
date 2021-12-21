"use strict";
const mobileNavControl = document.querySelector(".mobile_nav_control");
const primaryNavigation = document.querySelector(".primary_nav_control");

// console.log(mobileNavControl);
// console.log(primaryNavigation);
const navToggle = () => {
  mobileNavControl.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    const dataAttribute = primaryNavigation.getAttribute("data-visible");
    console.log(dataAttribute);
    if (dataAttribute === "false") {
      primaryNavigation.setAttribute("data-visible", "true");
      mobileNavControl.setAttribute("aria-expanded", "true");
      mobileNavControl.classList.add("cross");
    } else {
      primaryNavigation.setAttribute("data-visible", "false");
      mobileNavControl.setAttribute("aria-expanded", "false");
      mobileNavControl.classList.remove("cross");
    }
  });
};

// navToggle();
/* NavBar Opacity Control */
const nav = document.querySelector(".nav");
const navHandler = function (e) {
  if (e.target.classList.contains("nav_link")) {
    const link = e.target;
    const allNav = link.closest(".nav").querySelectorAll(".nav_link");
    const logo = link.closest(".header").querySelector("img");

    console.log(link);
    console.log(allNav);
    console.log(logo);
    // if (!link) return;

    allNav.forEach((navItem) => {
      if (navItem !== link) navItem.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener("mouseover", navHandler.bind(0.5));
// nav.addEventListener("mouseout", navHandler.bind(1));

/* Sticky Nav */

/* TODO:: SLIDER */
const rightBtn = document.querySelector(".btn__slide--right");
const leftBtn = document.querySelector(".btn__slide--left");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dots");

// ! defining a univarsal variable
let currSlide = 0;
const maxSlideNo = slides.length;

const moveToSlide = (curSlide) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
};
moveToSlide(0);
// ! implementing dot funtionality
const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activeDots = (curslide) => {
  document.querySelectorAll(".dots__dot").forEach((el) => {
    return el.classList.remove("dots__dot--active");
  });

  document
    .querySelector(`.dots__dot[data-slide="${curslide}"]`)
    .classList.add("dots__dot--active");
};
dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains(".dots__dot")) {
    console.log("Dot");
  }
});
activeDots(0);

dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const getValue = e.target.dataset.slide;
    // moveToSlide(currSlide);
    // activeDots(currSlide);
    console.log("Dot");
    moveToSlide(getValue);
    activeDots(getValue);
  }
});

const nextSlide = () => {
  currSlide++;
  if (currSlide > maxSlideNo - 1) {
    currSlide = 0;
  }
  // ! toggling the rotate class ======!
  if (!rightBtn.classList.contains("btn__slide--right-rotate")) {
    rightBtn.classList.add("btn__slide--right-rotate");
  } else {
    rightBtn.classList.remove("btn__slide--right-rotate");
  }
  moveToSlide(currSlide);
  activeDots(currSlide);
};
const prevSlide = () => {
  currSlide--;
  if (currSlide < 0) {
    currSlide = maxSlideNo - 1;
  }
  // ! toggling the rotate class ======!
  if (!leftBtn.classList.contains("btn__slide--left-rotate")) {
    leftBtn.classList.add("btn__slide--left-rotate");
  } else leftBtn.classList.remove("btn__slide--left-rotate");
  moveToSlide(currSlide);
  activeDots(currSlide);
};

rightBtn.addEventListener("click", nextSlide);

leftBtn.addEventListener("click", prevSlide);

// implementing the arrow kyes funtionality
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.target);
  console.log(e);
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  } else return;
});
