$(function () {

  $('.best-restaurants__list').slick({
    arrows: false,
    responsive: [
      {
        breakpoint: 2048,
        settings: "unslick"
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]
  });

  $('.reviews__slider-wrap').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        dots: false,
      }
    ]
  });

  var mixer = mixitup('.popular-categories__content');
  mixer.filter('.category-burger');

});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const burgerClose = document.querySelector('.page-navigation__close');
  const pageNavigation = document.querySelector('.page-navigation');

  burger.addEventListener('click', () => {
    pageNavigation.classList.add('page-navigation--active');
    document.body.classList.add('lock');

  });

  burgerClose.addEventListener('click', () => {
    pageNavigation.classList.remove('page-navigation--active');
    document.body.classList.remove('lock');
  });

});


