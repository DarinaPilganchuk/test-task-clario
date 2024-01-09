const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  initialSlide: 0,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      width: 320,
      height: 500,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 48,
      width: 960,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
