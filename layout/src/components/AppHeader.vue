<template>
  <header>
    <div class="wrap">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/images/logo.png" alt="logo" />
        </router-link>
      </div>
      <ul class="navi" @click="isActive">
        <!--activeIndex가 0이면 on클래스를 추가-->
        <li :class="{on : activeIndex === 0}">
          <router-link to="/">HOME</router-link>
        </li>
        <!--activeIndex가 1이면 on클래스를 추가-->
        <li :class="{on : activeIndex === 1}">
          <router-link to="/about">ABOUT</router-link>
        </li>
        <!--activeIndex가 2이면 on클래스를 추가-->
        <li :class="{on : activeIndex === 2}">
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
//반응형 데이터를 사용하기 위한 ref를 불러옴
import { ref } from 'vue';

export default {
  setup() {
    //현재 활성화된 메뉴의 인덱스를 저장하는 상태변수
    //초기값은 0(home메뉴)로 설정
    const activeIndex = ref(0)

    //메뉴 클릭 시 실행되는 이벤트 핸들러 함수
    const isActive = (event) => {
      //클릭한 요소의 부모 노드(li)를 가져옴
      const targetEl = event.target.parentNode

      //모든 메뉴를 순회
      const gnbMenu = document.querySelectorAll(".navi > li")
      gnbMenu.forEach((menu, index) => {
        //클릭된 메뉴와 현재 순회중인 메뉴가 같다면 메뉴의 index를 activeIndex상태변수에 할당
        if(menu === targetEl){
          activeIndex.value = index
        }
      })

    }
    //template에서 사용할 변수와 메서드를 반환
    return {
      activeIndex,
      isActive
    }
  }
}
</script>

<style scoped>
/*scoped = 해당 컴포넌트에만 적용되는 스타일 */
/*헤더*/
header {
  min-width: 1300px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

header .wrap {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
}

.navi {
  display: flex;
  gap: 32px;
}

.navi a {
  color: #191919;
}

.navi li.on a {
  color: #10c9c3;
}
</style>