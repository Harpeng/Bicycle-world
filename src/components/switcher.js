import {  coverText,bikes,bikeNames, btnSwitch, btnSwitchHeader, iconMenu, menu, span, page, footer, logo, mainWhiteElements, textIntro , texts, header , bikeContainer, btnSliders,} from "./utils";


//включение темного режима
const enableDarkMode = () => {
  mainWhiteElements.forEach((item) => {
    item.classList.add("black-theme__color_bright");
  });

  texts.forEach((item) => {
    item.classList.add("black-theme__color_text");
  });

  bikeNames.forEach((item) => {
      item.classList.add("black-theme__color_bright");
  });

  // coverText.forEach((item) => {
  //   item.classList.add("black-theme__color_text");
  // });


  page.classList.add("black-theme__color");


  iconMenu.classList.add("header__menu-icon_white-theme");

  span.classList.add("header__menu-icon_span_white-theme");

  footer.classList.add("black-theme__color_footer");

  menu.classList.add("black-theme__color");

  span.classList.add("black-theme__color_bright");

  header.classList.add("black-theme__color");

  textIntro.classList.add("black-theme__color_text-intro");

  logo.classList.add("black-theme__color_logo");

  if (bikeContainer.classList.contains("intro__bike-container_white")) {
    bikeContainer.classList.replace(
      "intro__bike-container_white",
      "black-theme_bike-container"
    );

  btnSliders.forEach((item) => {
    item.classList.add("black-theme__color_btn-slider");

    if (item.classList.contains("cover__button_strelka_left")) {
      item.classList.replace(
        "cover__button_strelka_left",
        "cover__button_strelka_left-night"
      );
    }

    if (item.classList.contains("cover__button_strelka_right")) {
      item.classList.replace(
        "cover__button_strelka_right",
        "cover__button_strelka_right-night"
      );
    }

    btnSwitch.checked = true;
    btnSwitchHeader.checked = true;

    localStorage.setItem("dark-mode", "enabled");
  });
}
}

const disableDarkMode = () => {
  mainWhiteElements.forEach((item) => {
    item.classList.remove("black-theme__color_bright");
  });

  bikeNames.forEach((item) => {
      item.classList.remove("black-theme__color_bright");
  });


  texts.forEach((item) => {
    item.classList.remove("black-theme__color_text");
  });

  // coverText.forEach((item) => {
  //   item.classList.remove("black-theme__color_text");
  // });

  page.classList.remove("black-theme__color");

  iconMenu.classList.remove("header__menu-icon_white-theme");

  span.classList.remove("header__menu-icon_span_white-theme");

  footer.classList.remove("black-theme__color_footer");


  menu.classList.remove("black-theme__color");

  span.classList.remove("black-theme__color_bright");

  header.classList.remove("black-theme__color");

  textIntro.classList.remove("black-theme__color_text-intro");

  logo.classList.remove("black-theme__color_logo");


if (!bikeContainer.classList.contains("intro__bike-container_white")) {
    bikeContainer.classList.replace(
      "black-theme_bike-container",
      "intro__bike-container_white"
    );
  }

  btnSliders.forEach((item) => {
    item.classList.remove("black-theme__color_btn-slider");

if (!item.classList.contains("cover__button_strelka_left")) {
      item.classList.replace(
        "cover__button_strelka_left-night",
        "cover__button_strelka_left"
      );
    }

    if (!item.classList.contains("cover__button_strelka_right")) {
      item.classList.replace(
        "cover__button_strelka_right-night",
        "cover__button_strelka_right"
      );
    }

    btnSwitch.checked = false;
    btnSwitchHeader.checked = false;
    localStorage.setItem("dark-mode", "disabled");
  });
}

// const bikeChanger = () => {
//   if(window.screen.width <= 766 ) {
//     bikeNames.forEach((item) => {
//         item.classList.remove("black-theme__color_bright");
//         console.log('ghbd')
//     });
//   }
// }

const bikeChanger = () => {
    bikes.forEach((item) => {
      item.classList.add("black-theme__color_bike-names");
})
}

const bikeChangerRevers = () => {
  bikes.forEach((item) => {
    item.classList.add("black-theme__color_bright");
})
}




export {bikeChangerRevers,bikeChanger,enableDarkMode, disableDarkMode};
