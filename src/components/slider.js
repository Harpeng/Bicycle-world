const imgSlider = new Swiper('.cover__container-img', {
    navigation: {
        nextEl: '.cover__button_strelka_right',
        prevEl: '.cover__button_strelka_left'
    },

    slidesPerView: 2,

    spaceBetween: 30,

    slidesPerGroup: 1,

    initialSlide: 0,

    loop: true,

    loopedSlides: 3,

    allowTouchMove:false,

});


const textSlider = new Swiper('.cover__container-text', {
    navigation: {
        nextEl: '.cover__button_strelka_right',
        prevEl: '.cover__button_strelka_left'
    },

    slidesPerView: 1,

    spaceBetween: 30,

    slidesPerGroup: 1,

    initialSlide: 0,

    loop: true,

    loopedSlides: 2,

    allowTouchMove:false,

});

const iconSlider = new Swiper('.cover__container-icon', {
    navigation: {
        nextEl: '.cover__button_strelka_right',
        prevEl: '.cover__button_strelka_left'
    },

    slidesPerView: 1,

    slidesPerGroup: 1,

    initialSlide: 0,

    loop: true,

    loopedSlides: 1,

    effect: 'fade',

    fadeEffect: {
        crossFade: true
    },

    allowTouchMove:false,

});


