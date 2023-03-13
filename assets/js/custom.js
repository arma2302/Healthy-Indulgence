var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos <= 360) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

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
// MENU SLIDER

var swiper = new Swiper(".menuSlider", {
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  slidesPerView: "auto",
  spaceBetween: 14,
});
$(".nav .nav-item a").click(function () {
  $(".nav .nav-item a").removeClass("active");
  $(this).addClass("active");
});
