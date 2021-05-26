const swiper = new Swiper(".swiper-container", {
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 9000,
  },
});

export { swiper };
