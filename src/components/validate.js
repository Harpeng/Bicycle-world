import { enableValidationConfig } from "./utils";

const showInputError = (errorElement, inputElement, inputErrorClass) => {
  inputElement.classList.add(inputErrorClass);

  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (errorElement, inputElement, inputErrorClass) => {
  inputElement.classList.remove(inputErrorClass);

  errorElement.textContent = "";
};

const checkInputValidity = (inputElement, formElement, inputErrorClass) => {
  const isInputValid = inputElement.validity.valid;

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  if (!isInputValid) {
    showInputError(errorElement, inputElement, inputErrorClass);
  } else {
    hideInputError(errorElement, inputElement, inputErrorClass);
  }
};

const toggleButtonState = (button, isActive = false, inactiveButtonClass) => {
  if (isActive) {
    button.classList.remove(inactiveButtonClass);

    button.disabled = false;


  } else {
    button.classList.add(inactiveButtonClass);

    button.disabled = "disabled";
  }
};

const hideValidity = (formElement) => {
  const activeErrors = formElement.querySelector(".footer__input");

  activeErrors.classList.remove("footer__input-error");

  const visibleError = formElement.querySelector(".footer__error");

  visibleError.textContent = "";
};

const setEventListeners = (
  formElement,
  { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass }
) => {
  const input = formElement.querySelector(inputSelector);

  const submitButton = formElement.querySelector(submitButtonSelector);

  input.addEventListener("input", () => {
      const isFormValid = formElement.checkValidity();

      checkInputValidity(input, formElement, inputErrorClass);

      toggleButtonState(submitButton, isFormValid, inactiveButtonClass);
    });
};

const enableValidation = ({ formSelector, ...rest }) => {
    const forms = document.querySelectorAll(formSelector); 

    [...forms].forEach(formElement => { 
  
      setEventListeners(formElement, rest); 
  
    }); 
};

export {
  enableValidation,
  setEventListeners,
  hideValidity,
  toggleButtonState,
  checkInputValidity,
  hideInputError,
  showInputError,
};
