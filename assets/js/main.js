AOS.init();
// testimonial-slider
var swiper = new Swiper(".testimonial-slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    '575': {
      slidesPerView: 1
    }
  }
})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1000) {
    $('header').addClass('fixed-header');
  }
  else {
    $('header').removeClass('fixed-header');
  }
});

