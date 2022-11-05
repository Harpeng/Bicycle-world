//переменные для формы
const emailInput = document.querySelector(".footer__input");
const emailButtonInput = document.querySelector(".footer__form-button");
const emailForm = document.querySelector(".footer__form");

//переменные для табов
const head = document.querySelector(".tabs__head");
const body = document.querySelector(".tabs__body"); 

//переменные для свитча темы
const btnSwitch = document.querySelector('.footer__switch-input');
const page = document.querySelector(".page");
const footer = document.querySelector(".footer");
const logo = document.querySelector(".footer__logo");
const mainWhiteElements = document.querySelectorAll("#bright");
const textIntro = document.querySelector(".intro__text");
const texts = document.querySelectorAll("#text");
const header = document.querySelector(".header");
const bikeContainer = document.querySelector(".intro__bike-container");
const btnSliders = document.querySelectorAll(".cover__button");

const enableValidationConfig = {
    formSelector: ".footer__form",
    inputSelector: ".footer__input",
    submitButtonSelector: ".footer__form-button",
    inactiveButtonClass: "footer__form-button_invalid",
    inputErrorClass: "footer__input-error",
    errorClass: "footer__error",
  };


export {page, footer, logo, mainWhiteElements, textIntro , texts, header , bikeContainer, btnSliders, btnSwitch, head, body, emailInput, emailButtonInput, emailForm, enableValidationConfig};