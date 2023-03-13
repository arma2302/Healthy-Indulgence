var swiper = new Swiper(".swiperbanner", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },
  speed: 650,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
