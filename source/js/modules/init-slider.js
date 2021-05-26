const swiper = new Swiper(".swiper-container", {
  speed: 400,
  slidesPerView: 5,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".slider__btn--prev",
    prevEl: ".slider__btn--next",
  },
  // autoplay: {
  //   // delay: 9000,
  // },
  autoHeight: true,
});

export { swiper };
