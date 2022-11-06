import {menuLinks, iconMenu, menu, span, page} from './utils.js';

const openBurgerMenu = () => {
    if(iconMenu) {
        iconMenu.addEventListener('click', burgerMenuHandler);
    }
}

const openBurgerMenuLinks = () => {
        menuLinks.forEach((item) => {
            item.addEventListener('click', clickOnMenuLinks);
        })
}

const burgerMenuHandler = () => {
    page.classList.toggle('page__lock');
    iconMenu.classList.toggle('header__menu-icon_active');
    span.classList.toggle('header__menu-icon_span_active');
    menu.classList.toggle('header__nav_active');
}

const clickOnMenuLinks = () => {
    if(iconMenu.classList.contains('header__menu-icon_active')) {
        menu.classList.remove('header__nav_active');
        page.classList.remove('page__lock');
        iconMenu.classList.remove('header__menu-icon_active');
        span.classList.remove('header__menu-icon_span_active');
    }
}

export {openBurgerMenu, openBurgerMenuLinks};