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
