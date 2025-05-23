//객체
const object = {
  "키1": "값1",
  "키2": "값2",
  "키3": "값3",
}
//객체의 키1번값을 불러오는 방법
//object.키1

//new Swiper(선택자, {옵션})
const swiper = new Swiper('.wrap',{
  direction: 'horizontal', //스와이퍼 방향 설정,(horizontal:수평, vertical:수직)
  loop: true, //무한 루프 모드를 활성화(비활성화 : false)
  navigation: {
    nextEl : '.swiper-button-next',//다음 슬라이드로 이동하는 버튼 선택자 
    prevEl : '.swiper-button-prev',//이전 슬라이드로 이동하는 버튼 선택자
  },
  spaceBetween: 0, //슬라이드 간의 간격
  slidesPerView: "auto",//화면에 표시할 슬라이드의 수
  grabCursor: true, //마우스를 올렸을 때 커서를 손 모양으로 변경
  centeredSlides: true, //현재 슬라이드를 중앙에 위치시키며, 슬라이드가 스크롤될 때 중앙 정렬을 유지
  speed: 1000, //슬라이드 속도 조절
  autoplay:{ //슬라이드 자동 전환 효과
    delay: 1000, //지연시간
    disableOnInteraction: true,//사용자가 슬라이드를 조작하면 자동 재생이 중지되도록 설정
  },
  effect: "coverflow", //슬라이드 전환 효과(coverflow : 3d회전)
  coverflowEffect: {
    rotate: 50, //회전각도
    stretch: -100, //슬라이드를 -100px만큼 줄여서 공간을 조정
    depth: 400, //깊이를 400으로 설정하여 3d효과 강조
    modifier: 1, //효과의 강도를 조정하는 값
    slideShadows: false,//그림자 효과 비활성화
  },
  pagination: {
    el: '.swiper-pagination', //페이지네이션을 나타낼 선택자
    type: 'fraction',//페이지네이션의 타입을 fraction으로 설정,
    //현재 슬라이드 번호와 전체 슬라이드 수를 표시
  }
})


//.btnStart요소 선택
const btnStart = document.querySelector(".btnStart")
//.btnStop요소 선택
const btnStop = document.querySelector(".btnStop")

//btnStop버튼을 클릭하면 자동롤링 정지
btnStop.addEventListener("click",() => {
  swiper.autoplay.stop();
})

//btnStart버튼을 클릭하면 자동롤링 시작
btnStart.addEventListener("click",() => {
  swiper.autoplay.start();
})