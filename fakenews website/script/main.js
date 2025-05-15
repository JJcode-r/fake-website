// scripting for hero section swiper
const heroSwiper = new Swiper(".swiper-hero", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination-featured",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

// scripting for featured section swiper
const featuredSwiper = new Swiper(".swiper-featured", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination-featured",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-featured",
    prevEl: ".swiper-button-prev-featured",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

// scripting for testimoney section swiper
let swiperCards = new Swiper(".tests", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});



// const swiperContainer = document.querySelector(".swiper-hero");

// swiperCards.on("slideChangeTransitionEnd", function () {
//   if (swiper.isEnd) {
//     swiperContainer.style.width = "100%";
//   } else {
//     swiperContainer.style.display = "100%";
//   }
// });
