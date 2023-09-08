import Swiper from "swiper/bundle";
import "swiper/css/bundle";


const imgSlider = new Swiper(".cover__container-img", {
  navigation: {
    nextEl: ".cover__button_strelka_right",
    prevEl: ".cover__button_strelka_left",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 766px
    766: {
      slidesPerView: 2,
    },
  },

  spaceBetween: 40,

  slidesPerGroup: 1,

  initialSlide: 0,

  loop: true,

  loopedSlides: 3,

  allowTouchMove: false,
});

const titleSlider = new Swiper(".cover__container-title", {
  navigation: {
    nextEl: ".cover__button_strelka_right",
    prevEl: ".cover__button_strelka_left",
  },

  slidesPerView: 1,

  spaceBetween: 30,

  slidesPerGroup: 1,

  initialSlide: 0,

  loop: true,

  loopedSlides: 2,

  allowTouchMove: false,
});

const textSlider = new Swiper(".cover__container-text", {
  navigation: {
    nextEl: ".cover__button_strelka_right",
    prevEl: ".cover__button_strelka_left",
  },

  slidesPerView: 1,

  spaceBetween: 200,

  slidesPerGroup: 1,

  initialSlide: 0,

  loop: true,

  loopedSlides: 2,

  allowTouchMove: false,
});

const iconSlider = new Swiper(".cover__container-icon", {
  navigation: {
    nextEl: ".cover__button_strelka_right",
    prevEl: ".cover__button_strelka_left",
  },

  slidesPerView: 1,

  slidesPerGroup: 1,

  initialSlide: 0,

  loop: true,

  loopedSlides: 1,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  allowTouchMove: false,
});



const bikeSlider = new Swiper(".mySwipe", {
  allowTouchMove: false,
  init: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,

          spaceBetween: 30,
        
          slidesPerGroup: 1,
        
          initialSlide: 0,
        
          loop: true,
        
          loopedSlides: 2,

            pagination: {
              el: ".tabs__pagination",
              clickable: true,
            },
            resizeObserver: false,
        },
        // when window width is >= 766px
        766: {
          init: false,
        },
      },
});

console.log(bikeSlider)

export { imgSlider, titleSlider, textSlider, iconSlider, bikeSlider };
