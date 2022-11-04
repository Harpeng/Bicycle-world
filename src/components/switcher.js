import {emailInput, emailButtonInput} from "./utils";
const page = document.querySelector('.page');
const footer = document.querySelector('.footer');
const logo = document.querySelector('.footer__logo');
const mainWhiteElements = document.getElementById('bright');
const textIntro = document.querySelector('.intro__text');
const text = document.getElementById('text');
const btnSliders = document.querySelectorAll('.cover__button')
const leftBtnSlider = document.getElementById('button-slider-left');
const rightBtnSlider = document.getElementById('button-slider-right');
const lightIcon = document.querySelector('.footer__icon_light');
const darkIcon = document.querySelector('.footer__icon_dark');



const changeTheme = () => {
        page.classList.toggle('.black-theme__color');

        footer.classList.toggle('black-theme__color_footer');
    
        logo.classList.toggle('black-theme__color_logo');
    
        mainWhiteElements.classList.toggle('black-theme__color_bright');
    
        textIntro.classList.toggle('black-theme__color_text-intro');
    
        text.classList.toggle('black-theme__color_text');
}

export {changeTheme};