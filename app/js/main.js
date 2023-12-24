$(function () {

  $('.reviews__slider-wrap').slick({
    dots: true
  })

  var mixer = mixitup('.popular-categories__content');
  mixer.filter('.category-burger');

})
