window.onload = function(){
    // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt")  
  const mypageList = document.querySelector(".mypage-list")
  mypageBt.addEventListener("click",function(){
    mypageList.classList.toggle("showMypage")
  })
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion" , {
    slidesPerView :1,
    spaceBetween:24,
    breakpoints: {
        480 : {
            slidesPerView :2
        },
        760 : {
            slidesPerView :2
        }
    },
    navigation:{
        nextEl:".promotion .sw-next",
        prevEl:".promotion .sw-prev",
    },
    loop : true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  })
};