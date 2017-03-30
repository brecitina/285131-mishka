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
