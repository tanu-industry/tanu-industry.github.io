var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".ourServicesSwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".rdymde-frntr", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


