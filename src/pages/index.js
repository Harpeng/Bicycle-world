import '../styles/index.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {tabs} from '../components/tabs.js';
import {imgSlider, titleSlider, textSlider, iconSlider} from '../components/slider.js';
import {
  enableValidation,
  hideValidity,
  toggleButtonState,
} from "../components/validate.js";
import {btnSwitchHeader, btnSwitch, emailInput, emailButtonInput, emailForm, enableValidationConfig } from "../components/utils.js";
import {changeTheme} from '../components/switcher.js';
import {openBurgerMenu, openBurgerMenuLinks} from '../components/menuBurger';

// вызов функции на открытие бургер меню 
openBurgerMenu();

// вызов функции закрытия бургера при переходе по ссылке в меню
openBurgerMenuLinks();

tabs();
// вызов функции табов после загрузки страницы
document.addEventListener('DOMContentLoaded', tabs);

// запускаем валидацию формы
enableValidation(enableValidationConfig);

toggleButtonState(emailButtonInput, false, enableValidationConfig.inactiveButtonClass);

//функция сброса формы после отправки с блюром инпута
const reset = () => {
  emailInput.blur();
  emailForm.reset();
};


//функция отправки формы. (конструкцию if используем для предотвращения эффекта размытия и отправки формы)
const formEmailSubmitHandler = (evt) => {
  if (emailInput.onblur()) {
    evt.preventDefault();
  } else {
    evt.preventDefault();
  }
 // выводим сообщение в инпут об успешной отправки формы
  emailInput.value = "Круто!";

  // сбрасываем форму через 5 сек после отправки формы
  setTimeout(reset, 5000);
};


// клик срабатывает позже события блюр, поэтому выбрано событие mousedown, чтобы была возможность отправить форму
emailForm.addEventListener('submit', formEmailSubmitHandler);
emailButtonInput.addEventListener('mousedown', formEmailSubmitHandler)

// при фокусе инпута удаляется класс скрывающий кнопку отправки формы
emailInput.onfocus = () => {
  if (emailButtonInput.classList.contains("footer__is_hidden")) {
    emailButtonInput.classList.remove("footer__is_hidden");
  }

  hideValidity(emailForm);
};

// при размытии добавляется класс скрывающий кнопку отправки
emailInput.onblur = () => {
  if (!emailButtonInput.classList.contains("footer__is_hidden")) {
    emailButtonInput.classList.add("footer__is_hidden");
  }

  hideValidity(emailForm);
};


btnSwitch.addEventListener('click', changeTheme);
btnSwitchHeader.addEventListener('click', changeTheme);