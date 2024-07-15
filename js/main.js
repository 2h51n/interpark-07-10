window.onload = function () {
  // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt");
  const mypageList = document.querySelector(".mypage-list");
  mypageBt.addEventListener("click", function () {
    mypageList.classList.toggle("showMypage");
  });
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  // 쇼핑의 스와이퍼 기능 적용
  const swShopping = new Swiper(".sw-shopping", {
    slidesPerView: 3,
    grid: {
      rows: 3,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      900: {
        spaceBetween: 32,
        slidesPerView: 4,
        grid: {
          rows: 1,
        },
        slidesPerGroup: 3,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });
};
