//fullpage플러그인 적용
let myFullpage = new fullpage('#fullpage', {
  sectionSelector: 'section',
  autoScrolling:true,
  scrollHorizontally: true,
  menu: '#menu', //메뉴 버튼 기능 추가
  anchors: ['blossom', 'colorful', 'board', 'addict'],
  css3:false //Chrome에서 css3 변환 및 고정된 요소의 문제를 해결합니다
});

//section요소 선택
const section = document.querySelectorAll("section")

//마우스 위치에 따라 움직이는 이미지
//모든 section요소에 mousemove이벤트 생성
section.forEach(item => item.addEventListener("mousemove", (e) => {
  //parallax(선택자, x축위치값, X축 축소값, y축위치값, y축 축소값)
  function parallax(obj, rightStart, rightTimes, bottomStart, bottomTimes){
    //인자로 전달받은 obj값으로 이미지요소를 선택
    const objElement = document.querySelector(obj);
    //인자로 전달받은 값을 활용하여 해당 이미지의 x축, y축 위치를 설정
    objElement.style.right = rightStart + (e.pageX * rightTimes)+"px"
    objElement.style.bottom=bottomStart+(e.pageY * bottomTimes)+"px"
  }
  //1페이지
  parallax(".p11", 20, -1 / 30, 20, -1 / 30)
  parallax(".p12", 130, 1 / 20, -40, 1 / 20)
  
  const p13 = document.querySelector(".p13")
  p13.style.right = 60 + e.pageX * 1/20 + "px"
  p13.style.top = 180 + e.pageY * 1/20 + "px"

  //2페이지
  parallax('.p21', -180, -1 / 30, -480, -1 / 30);
  parallax('.p22', 130, 1 / 50, -40, 1 / 50);
  //3페이지
  parallax('.p31', 180, -1 / 30, 30, -1 / 30);
  parallax('.p32', 110, 1 / 20, -270, 1 / 20);
  parallax('.p33', -70, 1 / 20, -130, 1 / 20);
  //4페이지
  parallax('.p41', 20, -1 / 30, -120, -1 / 30);
  parallax('.p42', 0, -1 / 20, -180, -1 / 20);

}))