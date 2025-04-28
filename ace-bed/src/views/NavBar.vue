<template>
  <div id="nav">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="dropdown">
      <button class="toggle" @click="menuToggle">
        <!--폰트어썸 아이콘 사용-->
        <font-awesome-icon :icon="['fas', 'bars']"/>
      </button>
      <ul class="dropdown-contents" v-if="MenuToggle" @click="menuHide">
        <li>BED</li>
        <li>FURNITURE</li>
        <li>STRESSLESS</li>
        <li>SLEEP CARE</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
//폰트어썸 라이브러리 플러그인
import { library } from '@fortawesome/fontawesome-svg-core'
//추가할 아이콘 임포트
import { faBars } from '@fortawesome/free-solid-svg-icons'
//폰트어썸 컴포넌트 임포트
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

//폰트어썸 library에 아이콘 추가
library.add(faBars)

export default {
  components: { FontAwesomeIcon },
  setup(){
    //MenuToggle은 메뉴의 열림/닫힘 상태를 관리하는 ref로 초기값은 false(메뉴 닫힘 상태)
    const MenuToggle = ref(false)

    //menuToggle메서드는 MenuToggle값을 반전시켜 메뉴를 열거나 닫는 기능을 합니다
    const menuToggle = () => {
      MenuToggle.value = !MenuToggle.value
    }

    //menuHide함수는 메뉴 항목(LI)을 클릭했을 때 메뉴를 닫는 기능입니다
    //이벤트 객체 e의 target이 'LI' 요소일 때 MenuToggle을 false로 설정하여 메뉴를 숨깁니다
    const menuHide = (e) => {
      if(e.target.nodeName === "LI") MenuToggle.value = false
    }
    
    return {
      MenuToggle,
      menuToggle,
      menuHide,
    }
  }
}
</script>

<style>
#nav{
  padding:20px 10px;
  box-sizing: border-box;
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown{
  position:relative;
}

.dropdown > button{
  border:none;
  outline:none;
  background-color:transparent;
  font-size:20px;
  cursor:pointer
}

.dropdown-contents{
  position:absolute;
  width:140px;
  margin-top:20px;
  padding:20px;
  background:#fff;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  right:-10px;
}
.dropdown-contents::before{
  content:'';
  position:absolute;
  border:10px solid transparent;
  border-bottom-color:#fff;
  top:-20px; right:10px;
}
.dropdown-contents > li{
  margin:10px 0;
  font-weight: bold;
  cursor:pointer;
}
.dropdown-contents > li:hover{
  color:#0890c0;
}
</style>