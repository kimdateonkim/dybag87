<template>
  <div class="container">
    <div class="logo">
      <img src="./assets/logo.png" />
    </div>
    <!--입력창에 글자가 입력되면 searchGroup메서드를 호출, 인자로 이벤트객체 전달-->
    <input 
      class="search-input"
      type="text"
      placeholder="상품검색"
      @input="searchGroup($event)"
    />
    <!--ProductList로 items데이터 전달-->
    <ProductList :items="items" />
  </div>
</template>

<script>
import { ref } from 'vue'
//data.json 임포트
import data from "./assets/data.json"
import ProductList from '@/views/ProductList.vue'

export default {
  components: {ProductList},
  setup(){
    //items에 data를 할당
    const items = ref(data)
    console.log(items.value[0])

    //searchGroup메서드 생성
    const searchGroup = (e) => {
      let value = e.target.value //입력창에 입력하는 값
      items.value.forEach((item, i) => {
        //입력창에 입력하는 값(value)이 items의 name프로퍼티 값에 포함되어 있으면 true를 반환
        //배열.includes() = 배열의 항목에 특정 값이 포함되어 있는지 판단하여 true 또는 false를 반환
        const display = item.name.includes(value) ? "flex" : 'none';
        //.items요소의 display값을 display변수값으로 적용
        document.querySelectorAll('.items')[i].style.display = display
      })
    }

    return {
      items,
      searchGroup
    }
  }
}
</script>

<style>
*{margin:0; padding:0; box-sizing: border-box;}
.container{
  height:100vh;
  background-color:#3f454d;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-input{
  display:block;
  padding:12px 16px;
  margin:20px auto;
  width:320px;
  font-size:16px;
  outline:none;
  border:none;
}
</style>
