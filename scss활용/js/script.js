//페이지 로드 이벤트
addEventListener("load", () => {
  //클릭할 메뉴 버튼 요소와 gnb요소를 변수에 저장
  const btn = document.querySelector(".menu-toggle-btn")
  const gnb = document.querySelector('.gnb')

  //메뉴버튼에 클릭 이벤트를 연결
  btn.addEventListener("click", () => {
    //gnb 요소의 css속성값을 담은 객체를 compStyles변수에 할당
    const compStyles = getComputedStyle(gnb)
    //gnb의 height속성 값을 height변수에 할당
    const height = compStyles.getPropertyValue('max-height')
    console.log(height)
    if(height === "0px"){//메뉴가 접혀있으면 gnb요소의 총 높이를 maxHeight값으로 설정(scrollHeight = 보이지 않는 콘텐츠를 포함한 높이를 구해줍니다.)
      gnb.style.maxHeight = gnb.scrollHeight+"px"
    }else{//메뉴가 펼쳐져있으면 gnb를 접어줍니다.
      gnb.style.maxHeight = "0px";
    }
  })
})