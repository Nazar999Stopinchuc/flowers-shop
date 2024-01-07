$(function () {
  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.best-restaurants__list:not(.slick-initialized)').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1500
      });
    } else {
      $('.best-restaurants__list.slick-initialized').slick('unslick');
    }
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


