var mainNav = document.querySelector('.main-nav');
var mainButton = document.querySelector('.main-nav__button');

mainNav.classList.remove('main-nav--nojs');

mainButton.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

var buyLinks = document.querySelectorAll('.js-buy');

buyLinks.forEach(function(link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.add('modal-overlay--show');
    popup.classList.add('modal-content--show');
  });
});

var popup = document.querySelector('.modal-content');
var overlay = document.querySelector('.modal-overlay');


window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    closePopup();
  }
});
overlay.addEventListener('click', function (event) {
  closePopup();
});
function closePopup(event) {
  if (popup.classList.contains('modal-content--show')) {
    popup.classList.remove('modal-content--show');
    overlay.classList.remove('modal-overlay--show');
  }
};

function initMap() {
  if(!ymaps)
    return;
  var mapWraper = document.querySelector('.contacts__map');
  mapWraper.classList.remove('contacts__map--default');
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map")
  var myMap = new ymaps.Map('map', {
    // При инициализации карты, обязательно нужно указать
    // ее центр и коэффициент масштабирования
    center: [59.936750, 30.321681], // Санкт-Петербург
    zoom: 16
  }, { maxZoom: 18, minZoom: 11 });

  // Включим масштабирование колесом мыши
  myMap.behaviors.enable('scrollZoom');

  // Создание метки
  var myPlacemark = new ymaps.Placemark(
    // Координаты метки
    [59.936339, 30.321681], {
      // Свойства
      // Текст метки
      hintContent: 'ул. Большая Конюшенная 19/8, Санкт-Петербург'
    }, {
      iconImageHref: 'img/icon-map-pin.svg', // картинка иконки
      iconImageSize: [70, 100], // размеры картинки
      iconImageOffset: [-35, -100] // смещение картинки
    });
  // Добавление метки на карту
  myMap.geoObjects.add(myPlacemark);
};

function initPage() {
  // инициализация карты (см в функцию initMap)
  ymaps.ready(initMap);
}

// запускает событие initPage после загрузки страницы
document.addEventListener("DOMContentLoaded", initPage);