var link = document.querySelector('.js-feedback');
var popup = document.querySelector('.modal-content');
var overlay = document.querySelector('.modal-overlay');
var close = popup.querySelector('.modal-content-close');
var form = popup.querySelector('form');
var userName = popup.querySelector('#message-name');
var userMail = popup.querySelector('#message-mail');
var userMessage = popup.querySelector('#message-feedback');
var storageName = localStorage.getItem('feedback-userName');
var storageMail = localStorage.getItem('feedback-userMail');

link.addEventListener('click', function (event) {
  event.preventDefault();
  overlay.classList.add('modal-overlay-show');
  popup.classList.add('modal-content-show');
  userName.focus();
  if (storageName) {
    userName.value = storageName;
    userMail.focus();
  }
  if (userMail) {
    userMail.value = storageMail;
  }
  if (storageName && storageMail) {
    userMessage.focus();
  }

});
close.addEventListener('click', function (event) {
  event.preventDefault();
  closePopup();
});
form.addEventListener('submit', function (event) {
  if (!userName.value || !userMail.value || !userMessage.value) {
    event.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    localStorage.setItem('feedback-userName', userName.value);
    localStorage.setItem('feedback-userMail', userMail.value);
  }
});
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    closePopup();
  }
});
overlay.addEventListener('click', function (event) {
  closePopup();
});
function closePopup(event) {
  if (popup.classList.contains('modal-content-show')) {
    popup.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
    overlay.classList.remove('modal-overlay-show');
  }
};

function initMap() {
  var mapWraper = document.querySelector('.map-contacts .wrapper');
  mapWraper.classList.remove('default-map');
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map")
  var myMap = new ymaps.Map('map', {
    // При инициализации карты, обязательно нужно указать
    // ее центр и коэффициент масштабирования
    center: [59.939331, 30.329427], // Санкт-Петербург
    zoom: 16
  }, { maxZoom: 18, minZoom: 11 });

  // Включим масштабирование колесом мыши
  myMap.behaviors.enable('scrollZoom');

  // Подключаем и указываем расположение ползунка масштабирования
  myMap.controls.add('zoomControl', { left: '40px', top: '50px' });

  // Создание метки 
  var myPlacemark = new ymaps.Placemark(
    // Координаты метки
    [59.938631, 30.323055], {
      // Свойства
      // Текст метки
      hintContent: 'ул. Большая Конюшенная 19/8, Санкт-Петербург'
    }, {
      iconImageHref: 'img/ic-ice-pin.png', // картинка иконки
      iconImageSize: [218, 142], // размеры картинки
      iconImageOffset: [-38, -135] // смещение картинки
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