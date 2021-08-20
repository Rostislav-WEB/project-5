$(document).ready(function () {
  let currentFloor = 2; // текущий этаж
  let floorPath = $('.home-image path'); // каждый отдельный этаж в svg
  let counterUp = $('.counter-up'); // этаж вверх
  let counterDown = $('.counter-down'); // этаж вниз
  let modal = $('.modal');
  let modalCloseButton = $('.modal-close-button');
  let viewFlatsButton = $('.view-flats');
  viewFlatsButton.on('click', toggleModal);
  // функция при наведении мышки на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // получение значения текущего этажа
    $('.counter').text(currentFloor); // записываем этажа в счетчик 
  });

  floorPath.on('click', toggleModal); // при клике на этаж вызвать окно

  modalCloseButton.on('click', toggleModal); // клик на кнопку закрыть


  // отслеживание клик по кнопке вверх
  counterUp.on('click', () =>  {
    if(currentFloor < 18) {
      currentFloor++;
      // форматирование в другой формат
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      // подсвечиваем текущий этаж
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  })
    // отслеживание клик по кнопке вниз
  counterDown.on('click', () => {
    if (currentFloor > 2) {
      currentFloor--;
      // форматирование в другой формат
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      // подсвечиваем текущий этаж
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });
  function toggleModal() { // функция открыть закрыть окно
    modal.toggleClass('is-open')
  }
});