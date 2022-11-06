import {iconMenu, menu, span, page, footer, logo, mainWhiteElements, textIntro , texts, header , bikeContainer, btnSliders,} from "./utils";

const changeTheme = () => {
  mainWhiteElements.forEach((item) => {
    item.classList.toggle("black-theme__color_bright");
  });

  texts.forEach((item) => {
    item.classList.toggle("black-theme__color_text");
  });

  page.classList.toggle("black-theme__color");

  iconMenu.classList.toggle("header__menu-icon_white-theme");

  span.classList.toggle("header__menu-icon_span_white-theme");

  footer.classList.toggle("black-theme__color_footer");

  menu.classList.toggle("black-theme__color");

  span.classList.toggle("black-theme__color_bright");

  header.classList.toggle("black-theme__color");

  textIntro.classList.toggle("black-theme__color_text-intro");

  logo.classList.toggle("black-theme__color_logo");

  if (bikeContainer.classList.contains("intro__bike-container_white")) {
    bikeContainer.classList.replace(
      "intro__bike-container_white",
      "black-theme_bike-container"
    );
  } else if (!bikeContainer.classList.contains("intro__bike-container_white")) {
    bikeContainer.classList.replace(
      "black-theme_bike-container",
      "intro__bike-container_white"
    );
  }

  btnSliders.forEach((item) => {
    item.classList.toggle("black-theme__color_btn-slider");

    if (item.classList.contains("cover__button_strelka_left")) {
      item.classList.replace(
        "cover__button_strelka_left",
        "cover__button_strelka_left-night"
      );
    } else if (!item.classList.contains("cover__button_strelka_left")) {
      item.classList.replace(
        "cover__button_strelka_left-night",
        "cover__button_strelka_left"
      );
    }

    if (item.classList.contains("cover__button_strelka_right")) {
      item.classList.replace(
        "cover__button_strelka_right",
        "cover__button_strelka_right-night"
      );
    } else if (!item.classList.contains("cover__button_strelka_right")) {
      item.classList.replace(
        "cover__button_strelka_right-night",
        "cover__button_strelka_right"
      );
    }
  });
  
};


export {changeTheme};
