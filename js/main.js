window.onload = function () {
  // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt");
  const mypageList = document.querySelector(".mypage-list");
  mypageBt.addEventListener("click", function () {
    mypageList.classList.toggle("showMypage");
  });

  // 프로모션 스와이퍼 기능
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

  // 쇼핑 스와이퍼 기능
  const swShopping = new Swiper(".sw-shopping", {
    slidesPerView: 1.1,
    grid: {
      rows: 1,
      fill: "row",
    },
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
    loop: true,
    pagination: {
      el: ".sw-shopping-pg",
      clickable: true,
    },
    spaceBetween: 10,
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
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
  // 투어 스와이퍼 기능
  const swTour = new Swiper(".sw-tour", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    grid: {
      rows: 4,
      fill: "row",
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    pagination: {
      el: ".sw-tour-pg",
      clickable: true,
    },
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween: 26,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 4,
      },
    },
  });
  // 티켓 스와이퍼 기능
  const swticket = new Swiper(".sw-ticket", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: "row",
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
    pagination: {
      el: ".sw-ticket-pg",
      clickable: true,
    },
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween: 26,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 4,
      },
    },
  });
};
