const emailInput = document.querySelector('.footer__input');
const emaiButtonInput = document.querySelector('.footer__form-button');


emailInput.onfocus = () => {
    if(emaiButtonInput.classList.contains('footer__is_hidden')) {
        emaiButtonInput.classList.remove('footer__is_hidden');
    }
}

emailInput.onblur = () => {
    if(!emaiButtonInput.classList.contains('footer__is_hidden')) {
        emaiButtonInput.classList.add('footer__is_hidden');
    } 
}

