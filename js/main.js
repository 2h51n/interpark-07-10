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
  const swTicket = new Swiper(".sw-ticket", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
    breakpoints: {
      480: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
      },
    },
  });
// 라이브 스와이퍼 기능
const swLive = new Swiper(".sw-live", {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".live .sw-next",
    prevEl: ".live .sw-prev",
  },
  breakpoints: {
    480: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 32,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 26,
      slidesPerView: 4,
    },
  },
});
// 도서 스와이퍼 기능
const swBooks = new Swiper(".sw-books", {
  loop: true, // 무한 루프
  slidesPerView: 1.2, // 기본적으로 화면에 1.2개의 슬라이드가 보임
  spaceBetween: 10, // 슬라이드 간의 간격
  grid: {
    rows: 4,
    fill: "row",
  },
  autoplay: {
    delay: 3000, // 3초마다 슬라이드 자동 전환
    disableOnInteraction: false, // 슬라이드 상호작용 후에도 자동 전환 유지
  },

  navigation: {
    nextEl: ".section-slide .sw-next", // 다음 버튼
    prevEl: ".section-slide .sw-prev", // 이전 버튼
  },

  breakpoints: {
    480: {
      spaceBetween: 10, // 화면 너비가 480px 이상일 때 슬라이드 간 간격
      slidesPerView: 2, // 2개의 슬라이드가 보임
    },
    768: {
      spaceBetween: 20, // 화면 너비가 768px 이상일 때 슬라이드 간 간격
      slidesPerView: 3, // 3개의 슬라이드가 보임
    },
    1024: {
      spaceBetween: 30, // 화면 너비가 1024px 이상일 때 슬라이드 간 간격
      slidesPerView: 4, // 4개의 슬라이드가 보임
    },
  },
});
// 이벤트 스와이퍼 기능
const swEvent = new Swiper(".sw-event", {
  loop: true, // 무한 루프
  slidesPerView: 1.2, // 기본적으로 화면에 1.2개의 슬라이드가 보임
  spaceBetween: 10, // 슬라이드 간의 간격
  autoplay: {
    delay: 3000, // 3초마다 슬라이드 자동 전환
    disableOnInteraction: false, // 슬라이드 상호작용 후에도 자동 전환 유지
  },

  navigation: {
    nextEl: ".section-slide .sw-next", // 다음 버튼
    prevEl: ".section-slide .sw-prev", // 이전 버튼
  },

  breakpoints: {
    480: {
      spaceBetween: 10, // 화면 너비가 480px 이상일 때 슬라이드 간 간격
      slidesPerView: 2, // 2개의 슬라이드가 보임
    },
    768: {
      spaceBetween: 20, // 화면 너비가 768px 이상일 때 슬라이드 간 간격
      slidesPerView: 3, // 3개의 슬라이드가 보임
    },
    1024: {
      spaceBetween: 30, // 화면 너비가 1024px 이상일 때 슬라이드 간 간격
      slidesPerView: 4, // 4개의 슬라이드가 보임
    },
  },
  
});
};
