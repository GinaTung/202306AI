var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 1,
  breakpoints: {
    /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
    992: {
      slidesPerView: 3,
    },
    /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
    576: {
      slidesPerView: 2,
    },
    /* 更小時都顯示 1 欄 */
    0: {
      slidesPerView: 1,
    },
  },
});
// const swiper2 = new Swiper('.myswiper2', {
//     slidesPerView: 1,
//     // spaceBetween: 1,
//     // scrollbar: {
//     //   el: ".swiper-scrollbar",
//     //   hide: true,
//     // },

//   })
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  /* 斷點設定 */
  breakpoints: {
    /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
    992: {
      slidesPerView: 3,
    },
    /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
    576: {
      slidesPerView: 2,
    },
    /* 更小時都顯示 1 欄 */
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  /* 斷點設定 */
  breakpoints: {
    /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
    992: {
      slidesPerView: 3,
    },
    /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
    576: {
      slidesPerView: 2,
    },
    /* 更小時都顯示 1 欄 */
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
