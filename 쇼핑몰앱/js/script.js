//JSON파일에서 항목 가져오기
function loadItem(){
  //fetch함수는 Promise자체를 반환합니다
  return fetch("data.json")
    .then(response => response.json())
    .then(json => json.items)//json파일의 items프로퍼티값을 반환(사용될 데이터)
}

//주어진 데이터 항목에서 HTML 목록 항목 만들기
function createHTMLString(item){//인자로 item(data.json)을 받아옵니다
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
      <span class="item__description">
        ${item.gender}, ${item.size}, ${item.name}
      </span>
    </li>
  `//return으로 함수 호출한 곳으로 태그를 작성하여 반환합니다. 이때 item의 정보를 이용하여 각각의 속성값과 text로 적용합니다
}

//주어진 항목으로 목록 업데이트
function displayItems(items) {
  const container = document.querySelector(".items")

  container.innerHTML = items.map(item => createHTMLString(item)).join("");
  //innerHTML속성을 이용하여 container요소안에 내용을 채웁니다
  //이때 매개변수로 전달받은 items는 data.json에 담겨있는 items정보를 참조합니다
  //.map()메서드를 이용하여 items배열에 담겨있는 정보를 순차적으로 전달하여 createHTMLString함수의 인자값으로 전달하고 join()메서드를 이용하여 모든 요소를 하나의 문자열로 만들어 줍니다
}

//버튼을 클릭했을때 실행될 함수
function onButtonClick(event, items) {//인자로 마우스이벤트 객체와 items(data.json)정보를 받아옵니다
  //dataset = data-속성을 만든 임의의 속성
  const dataset = event.target.dataset;//이벤트가 발생한 요소의 data-속성을 저장
  const key = dataset.key; //data-key속성값을 할당
  const value = dataset.value;//data-value속성값을 할당
  //key값과 value값이 비어있으면 함수를 종료시킴
  if(key == null || value == null){
    return
  }
  //여기까지 코드가 실행되었다면 key와 value값이 있다는 의미
  displayItems(items.filter(item => item[key] === value))
  //displayItem함수의 인자값으로 event.target의 data-key값과 items의 프로퍼티 이름이 일치하는 값을 찾고 data-value값과 item의 해당 프로퍼티 값이 일치하는지 확인하여 일치하면 전달해줍니다
}

//이벤트리스너가 담겨있는 함수
function setEventListener(items){//이벤트 리스너함수 생성, 인자값으로 items(data.json)을 받아옵니다
  //logo에 클릭이벤트 발생시 displayItem함수 호출 인자값으로 items를 전달(모든 목록이 표시)
  document.querySelector(".logo").addEventListener("click", () => displayItems(items))
  //buttons요소에 클릭이벤트 발생시 onButtonClick함수 호출 인자값으로 event객체와 items를 전달
  document.querySelector(".buttons").addEventListener("click",(event) => onButtonClick(event, items))
}
// function 함수명(event){
//   onButtonClick(event)
// }


//loadItem()함수 호출
loadItem()
  .then(items => {
    displayItems(items);//displayItem함수를 호출 items를 인자로 전달
    setEventListener(items);//setEventListener함수 호출 items를 인자로 전달
  })
  .catch(console.log);//이행 거절시 catch메서드의 인수를 통해 거절이유를 전달받음