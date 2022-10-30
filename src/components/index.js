import {enableValidation, enableValidationConfig, hideValidity, toggleButtonState} from './validate.js';

const emailInput = document.querySelector('.footer__input');
const emailButtonInput = document.querySelector('.footer__form-button');
const emailForm = document.querySelector('.footer__form');



enableValidation(enableValidationConfig); 

// функция формы отправки данных попап редактирования профиля 



const reset = () => {
    emailInput.blur();

    emailForm.reset();

}

const formEmailSubmitHandler = (evt) => {                                                                               

    evt.preventDefault(); 

    emailInput.onblur();

    emailInput.value = "Круто!";

    setTimeout(reset, 5000);

    console.log("привет");
  
  }; 

  emailButtonInput.addEventListener('click', formEmailSubmitHandler);


emailInput.onfocus = () => {
    if(emailButtonInput.classList.contains('footer__is_hidden')) {
        emailButtonInput.classList.remove('footer__is_hidden');
    }

    emailInput.onblur = () => {
        if(!emailInput.onfocus()) {
            emailButtonInput.classList.add('footer__is_hidden');
        }
    
        hideValidity(emailForm);
    }

    toggleButtonState(emailButtonInput, false, enableValidationConfig.inactiveButtonClass); 

    hideValidity(emailForm);
}

