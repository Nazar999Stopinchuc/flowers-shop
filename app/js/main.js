$(function () {

  $('.best-restaurants__slider').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  $('.reviews__slider-wrap').slick({
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        dots: false
      }
    ]
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const burgerClose = document.querySelector('.menu-mob__close');
  const menuMob = document.querySelector('.menu-mob');

  burger.addEventListener('click', () => {
    menuMob.classList.add('menu-mob--active');
    document.body.classList.add('lock');

  });

  burgerClose.addEventListener('click', () => {
    menuMob.classList.remove('menu-mob--active');
    document.body.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== menuMob) {
      menuMob.classList.remove('menu-mob--active');
      document.body.classList.remove('lock');
    }
  });

});

var mixer = mixitup('.popular-categories__content');
mixer.filter('.category-burger');


