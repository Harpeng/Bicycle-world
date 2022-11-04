//переменные для формы
const emailInput = document.querySelector(".footer__input");
const emailButtonInput = document.querySelector(".footer__form-button");
const emailForm = document.querySelector(".footer__form");

//переменные для табов
const head = document.querySelector(".tabs__head");
const body = document.querySelector(".tabs__body"); 

//переменные для свитча темы
const btnSwitch = document.querySelector('.footer__switch-input');

const enableValidationConfig = {
    formSelector: ".footer__form",
    inputSelector: ".footer__input",
    submitButtonSelector: ".footer__form-button",
    inactiveButtonClass: "footer__form-button_invalid",
    inputErrorClass: "footer__input-error",
    errorClass: "footer__error",
  };


export {btnSwitch, head, body, emailInput, emailButtonInput, emailForm, enableValidationConfig};