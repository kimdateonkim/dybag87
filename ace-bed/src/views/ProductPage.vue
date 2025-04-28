<template>
  <!--배경 이미지를 동적으로 설정하는 박스 컨테이너-->
  <div class="box" :style="{'background-image':`url(${product.path})`}">
    <!--태그 목록이 있을 경우에만 표시되는 태그 리스트-->
    <ul class="tag" v-if="product.tags.length > 0">
      <!--각 태그를 순회하며 리스트 아이템으로 표시-->
      <li :key="i" v-for="(tag, i) in product.tags">
        {{ tag }}
      </li>
    </ul>
    <!--제품 이름을 표시하는 제목-->
    <h1>{{ product.name }}</h1>
    <!--제품 설명을 표시하는 문단-->
    <p>{{ product.text }}</p>
    <!--상세 보기 버튼-->
    <button type="button">VIEW</button>
  </div>
</template>

<script>
//toRefs : 반응형객체로 변경된 props의 속성들을 개별적으로 반환하기 위해 필요
import {reactive, toRefs} from 'vue'

export default {
  //부모 컴포넌트로부터 전달받을 props을 정의
  props:{
    product: {
      //product의 type은 Object여야 합니다
      type: Object,
      required: true //product값은 필수값입니다
    }
  },
  setup (props) {
    //부모 컴포넌트로 부터 전달받은 props를 출력
    // console.log(props.product)
    
    //product를 reactive로 감싸서 반응형으로 만듭니다
    const product = reactive(props.product)

    return {
      ...toRefs(product) //반응형 객체의 속성들을 반환
    }
  }
}
</script>

<style scoped>
.box{
  width:1200px;
  height:650px;
  padding:40px;
  box-sizing: border-box;
  color:#fff;
  text-align: left;
}
.tag{
  display:flex;
  gap:10px;
}
.tag li{
  padding:5px 10px;
  border:1px solid #fff;
  border-radius: 20px;
  font-size:14px;
}
h1{
  margin-top:40px;
  font-size:24px;
}
button{
  margin-top:40px;
  border:1px solid #fff;
  background:transparent;
  padding:10px 20px;
  color:#fff;
  cursor:pointer;
}
button:hover{
  color:#333;
  background:#fff;
}
</style>