<template>
  <main>
    <nav-bar />
    <div class="container">
      <h1>ACE COLLECTION</h1>
      <div class="btnGroup" @click="isActive">
        <button type="button" class="on">신제품</button>
        <button type="button">추천제품</button>
      </div>
      <!--product값을 자식 컴포넌트로 전달-->
      <product-page :product="data.product"/>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import NavBar from '@/views/NavBar.vue'
import ProductPage from '@/views/ProductPage.vue'

export default {
  components: {NavBar, ProductPage},
  setup(){
    const data = ref({
      products: [
        {
          tags:["#루체","#LED조명","#기능성침대","#아트월컨셉"],
          name:"LUCE-Ⅲ",
          text:"LED조명으로 편안한 무드를 연출하는 아트월 컨셉 침대",
          path: '/src/assets/bg1.png'
        },
        {
          tags:[],
          name:"OPALO",
          text:"'오팔'을 모티브로 둥근 라운드 형태의 헤드보다가 특징인 침대",
          path: '/src/assets/bg2.png'
        }
      ],
      product:{}
    })

    //초기값 설정
    data.value.product = data.value.products[0]
    // console.log(data.value.product)

    //버튼 클릭 이벤트 핸들러
    const isActive = (e) => {
      //모든 버튼 요소 선택
      const btns = document.querySelectorAll(".btnGroup > button")
      //클릭된 버튼 요소
      const targetEl = e.target
      //각 버튼을 순회하면서 처리(forEach문 활용)
      btns.forEach((btn, i) => {
        if(btn === targetEl){
          btn.className = "on"//클릭된 버튼에 on클래스 추가
          //클릭된 버튼의 인덱스에 해당하는 제품 데이터로 업데이트
          data.value.product = data.value.products[i]
        }else{//클릭하지 않은 버튼요소
          btn.className = "" //클래스 제거
        }
      })
    }

    return{
      data,
      isActive
    }
  }
}
</script>

<style>
  *{margin:0; padding:0;}
  ul{list-style:none;}
  main{
    width:1200px;
    margin:auto;
    text-align: center;
    color:#333;
  }
  .btnGroup{
    margin:20px 0;
  }
  .btnGroup > button{
    border: none;
    outline: none;
    background:transparent;
    font-size:16px;
    cursor:pointer;
    padding:0 20px;
    color:#666;
  }
  .btnGroup > button:first-child{
    border-right:1px solid #999;
  }
  button.on{
    font-weight: bold;
    color:#0890c0;
  }
</style>
