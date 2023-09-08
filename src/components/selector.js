const selector = () => {
  const select = document.getElementById("dropDown");
  const block = document.querySelectorAll(".tabs__content");
  let lastIndex = 0; // После каждой смены опции, сохраняем сюда индекс предыдущего блока

  select.addEventListener("change", function () {
    block[lastIndex].classList.remove("tabs__content_active");
    // Чтобы сразу делать именно его невидимым при следующей смене

    let index = select.selectedIndex; // Определить индекс выбранной опции
    block[index].classList.add("tabs__content_active"); // Показать блок с соответствующим индексом

    lastIndex = index; // Обновить сохраненный индекс.
  });
};

export {selector};
