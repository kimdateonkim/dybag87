//햄버거 메뉴 선택
const toggleBtn = document.querySelector(".toggle")
//gnb 메뉴를 선택
const gnb = document.querySelector(".gnb")

//메뉴 버튼을 클릭하면 gnb에 active클래스를 추가 또는 제거하여 메뉴가 펼쳐지거나 접혀지게 만들어줍니다
toggleBtn.addEventListener("click",() => {
  gnb.classList.toggle("active");
})

//브라우저의 사이즈가 768px이상이 되면 gnb에 active클래스를 제거합니다
window.addEventListener("resize", () => {
  if(document.documentElement.offsetWidth > 768){
    gnb.classList.remove("active")
  }
})

//햄버거 메뉴에 클릭이벤트 생성
// toggleBtn.addEventListener("click", () => {
//   //getComputedStyle = 최종적으로 렌더링되는 스타일을 읽어오는 메서드
//   console.log(window.getComputedStyle(gnb).maxHeight)
//   //현재 gnb의 높이값을 변수에 할당
//   const gnbHt = window.getComputedStyle(gnb).maxHeight
//   if(gnbHt == "0px"){//gnb의 높이가 0px이면 실행
//     //gnb의 높이값을 안쪽 콘텐츠(가려진 li요소의 높이값)의 높이로 적용
//     gnb.style.maxHeight = gnb.scrollHeight + "px";
//   }else{//gnbHt가 0px이 아니면(gnb가 펼쳐져있으면) 실행
//     gnb.style.maxHeight = "0px";//gnb의 높이값을 0으로 변경하여 gnb를 접어줍니다
//   }
// })

// //브라우저의 넓이를 768px이상으로 늘렸을때 gnb의 max-height가 0px이 되지 않도록 하는 구문
// window.addEventListener("resize", () => {
//   //console.log(document.documentElement.offsetWidth)
  
//   if(document.documentElement.offsetWidth > 768){//문서의 넓이가 768이상일 경우
//     gnb.style.maxHeight = gnb.scrollHeight + "px";
//   }else{//문서의 넓이가 768이하일 경우
//     gnb.style.maxHeight = "0px"
//   }
// })