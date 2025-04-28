//모든 article요소들을 변수에 할당
const items = document.querySelectorAll("article")
//aside와 close버튼 선택
const aside = document.querySelector("aside")
const aClose = aside.querySelector("span")

//items의 갯수 만큼 반복(forEach함수 사용)
items.forEach((el) => {
  //현재 순회중인 article요소에 mouseenter 이벤트 발생
  el.addEventListener("mouseenter", (e) => {
    //영상의 재생위치를 0초로 초기화(밀리세컨드)
    //e.currentTarget.querySelector("video").currentTime = 0;
    
    //이벤트가 발생된 article요소의 자손요소인 video요소를 선택하여 play
    e.currentTarget.querySelector("video").play();
  })
  //현재 순회중인 article요소에 mouseleave 이벤트 발생
  el.addEventListener("mouseleave", (e) => {
    //이벤트가 발생된 article요소의 자손요소인 video요소를 선택하여 pause
    e.currentTarget.querySelector("video").pause();
  })

  //현재 순회중인 article요소에 클릭이벤트 생성
  el.addEventListener("click", (e) => {
    //제목과 본문의 내용, 그리고 video요소의 src값을 변수에 저장
    //textContent를 대체할수 있는 키워드 = innerText, innerHTML
    let tit = e.currentTarget.querySelector("h2").textContent;
    let txt = e.currentTarget.querySelector("p").textContent;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
    //console.log(tit+",", txt+",", vidSrc)

    //aside 요소 안쪽의 콘텐츠에 위의 변수 내용을 적용
    aside.querySelector("h1").textContent = tit;
    aside.querySelector("p").textContent = txt;
    aside.querySelector("video").setAttribute("src",vidSrc)
    //aside안쪽의 영상을 실행
    aside.querySelector("video").play();
    //aside요소에 on클래스를 추가하여 팝업이 나타나도록 합니다
    aside.classList.add("on")
  })
})


//aside의 닫기 버튼 클릭시
aClose.addEventListener("click",() => {
  //aside요소에 on클래스를 제거하고 영상 재생 중지
  aside.querySelector("video").pause();
  aside.classList.remove("on");
})
