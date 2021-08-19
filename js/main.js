$(document).ready(function () {
  let currentFloor = 2; // ттекущий этаж
  let floorPath = $('.home-image path'); // каждый отдельный этаж в svg
  let counterUp = $('.counter-up'); // этаж вверх
  let counterDown = $('.counter-down'); // этаж вниз
  // функция при наведении мышки на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // получение значения текущего этажа
    $('.counter').text(currentFloor); // записываем этажа в счетчик 
  });
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
  })
});