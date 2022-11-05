import {emailInput, emailButtonInput} from "./utils";
const page = document.querySelector('.page');
const footer = document.querySelector('.footer');
const logo = document.querySelector('.footer__logo');
const mainWhiteElements = document.querySelectorAll('#bright');
const textIntro = document.querySelector('.intro__text');
const texts = document.querySelectorAll('#text');
const header = document.querySelector('.header');
const bikeContainer= document.querySelector('.intro__bike-container');
const btnSliders = document.querySelectorAll('.cover__button')
const leftBtnSlider = document.getElementById('button-slider-left');
const rightBtnSlider = document.getElementById('button-slider-right');
const lightIcon = document.querySelector('.footer__icon_light');
const darkIcon = document.querySelector('.footer__icon_dark');



const changeTheme = () => {
        mainWhiteElements.forEach((item) => {
                item.classList.toggle('black-theme__color_bright');
        })

        texts.forEach((item) => {
                item.classList.toggle('black-theme__color_text');    
        })

        page.classList.toggle('black-theme__color');

        footer.classList.toggle('black-theme__color_footer');
    
        header.classList.toggle('black-theme__color');
    
        textIntro.classList.toggle('black-theme__color_text-intro');
        
        logo.classList.toggle('black-theme__color_logo');

        if(bikeContainer.classList.contains('intro__bike-container_white')) {
                bikeContainer.classList.replace('intro__bike-container_white', 'black-theme_bike-container');
        } else if (!bikeContainer.classList.contains('intro__bike-container_white')) {
                bikeContainer.classList.replace('black-theme_bike-container', 'intro__bike-container_white'); 
        }

        btnSliders.forEach((item) => {
                item.classList.toggle('black-theme__color_btn-slider');

                if(item.classList.contains('cover__button_strelka_left')) {
                        item.classList.replace('cover__button_strelka_left', 'cover__button_strelka_left-night');
                } else if(!item.classList.contains('cover__button_strelka_left')) {
                        item.classList.replace('cover__button_strelka_left-night','cover__button_strelka_left');
                }

                if(item.classList.contains('cover__button_strelka_right')) {
                        item.classList.replace('cover__button_strelka_right', 'cover__button_strelka_right-night');
                } else if(!item.classList.contains('cover__button_strelka_right')) {
                        item.classList.replace('cover__button_strelka_right-night','cover__button_strelka_right');
                }
        })
}

export {changeTheme};