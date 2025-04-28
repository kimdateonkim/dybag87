<template>
  <main>
    <section id="main">
      <div class="wrap">
        <h1>UI/UX &amp; Graphic Designer</h1>
        <p>
          I am a Graphic &amp; Web Designer based in Korea, specializing<br>
          in User Interface Design and Development
        </p>
      </div>
    </section>
    <section id="contents">
      <div class="wrap">
        <!--items에 담겨있는 데이터를 v-for를 이용하여 순차적으로 요소를 추가하여 넣어 준다. 이때 이미지의 src값을 데이터의 path값으로 할당하여 이미지를 표시해준다-->
        <article class="box" :key="i" v-for="(item, i) in items" @click="modalView(item)">
          <!--클릭이벤트가 발생하면 modalView메서드가 호출되고 item정보를 파라미터로 전달-->
          <img :src="item.path" alt="">
          <div class="eye"></div>
        </article>
      </div>
    </section>
    <!--modal컴포넌트를 homeView에 넣어줌-->
    <!--v-if로 modalRender가 true일때 ModalView가 나타남-->
    <!--자식컴포넌트에서 close-modal이벤트가 호출되면 HomeView컴포넌트에서 closeModal메서드를 호출-->
    <!--item데이터를 자식컴포넌트에 전달-->
    <ModalView v-if="modalRender" v-bind:item="item" @close-modal="closeModal" />
  </main>
</template>

<script>
import { ref } from 'vue'
//자식 컴포넌트인 ModalView를 임포트
import ModalView from './ModalView.vue'

export default {
  components: { ModalView },
  setup() {
    //클릭한 item데이터를 담을 곳
    const item = ref({})
    //modalRender가 true면 modal이 나타남
    const modalRender = ref(false)

    //modalView메서드 생성 파라미터로 전달받은 item데이터를 selectedItem매개변수로 받음
    const modalView = (selectedItem) => {
      //item정보를 item에 할당
      item.value = selectedItem
      //modalRender를 true로 변경하여 modal을 화면에 표시
      modalRender.value = true
    }

    //모달창을 닫는 메서드
    const closeModal = (data) => {
      //closeModal메서드가 호출되면 modalRender값을 매개변수 data로 변경
      modalRender.value = data
    }

    //items에 상품에 관련된 데이터를 담아줌
    const items = ref([
//new URL()을 사용하여 이미지의 절대 경로를 생성합니다
//'../assets/images/image01.jpg' = assets폴더 내의 images폴더에 있는 image01.jpg파일을 참조 합니다.
//image.meta.url = 현재 모듈의 url을 제공하는 특수 객체
//.href = 생성된 url객체에서 전체 url 문자열을 가져옵니다
      {
        name: "상품1",
        price: 10000,
        path: new URL('../assets/images/image01.jpg', import.meta.url).href
      },
      {
        name: "상품2",
        price: 10000,
        path: new URL('../assets/images/image02.jpg', import.meta.url).href
      },
      {
        name: "상품3",
        price: 10000,
        path: new URL('../assets/images/image03.jpg', import.meta.url).href
      },
      {
        name: "상품4",
        price: 10000,
        path: new URL('../assets/images/image04.jpg', import.meta.url).href
      },
      {
        name: "상품5",
        price: 10000,
        path: new URL('../assets/images/image05.jpg', import.meta.url).href
      },
      {
        name: "상품6",
        price: 10000,
        path: new URL('../assets/images/image06.jpg', import.meta.url).href
      },
      {
        name: "상품7",
        price: 10000,
        path: new URL('../assets/images/image07.jpg', import.meta.url).href
      },
      {
        name: "상품8",
        price: 10000,
        path: new URL('../assets/images/image08.jpg', import.meta.url).href
      },
      {
        name: "상품9",
        price: 10000,
        path: new URL('../assets/images/image09.jpg', import.meta.url).href
      },
      {
        name: "상품10",
        price: 10000,
        path: new URL('../assets/images/image10.jpg', import.meta.url).href
      },
      {
        name: "상품11",
        price: 10000,
        path: new URL('../assets/images/image11.jpg', import.meta.url).href
      },
      {
        name: "상품12",
        price: 10000,
        path: new URL('../assets/images/image12.jpg', import.meta.url).href
      },
    ])

    return {
      item,
      items,
      modalRender,
      modalView,
      closeModal,
    }
  }
}
</script>

<style scoped>
#main{
  min-width:1300px;
  height:320px;
  background-color:#f6f6f6;
  padding-top:80px;
  box-sizing: border-box;
  color:#191919;
  text-align: center;
}
#main h1{font-size:36px; line-height:80px;}
#main p{
  font-size:16px; 
  line-height:26px;
  color:#666;
}

#contents{
  min-width:1300px;
  overflow: hidden;
}
#contents .wrap{
  display:flex;
  flex-wrap:wrap;
}
#contents .box{
  width:325px;
  height:280px;
  position:relative;
  overflow: hidden;
}

#contents .eye{
  position:absolute;
  left:0; bottom:0; right:0; top:0;
  background: rgba(16, 201, 195, 0.6) url(../assets/images/eye.png) no-repeat center;
  cursor:pointer;
  opacity:0;
  /*transform:translateX(-100%);*/
  transition:all 0.5s;
}
#contents .box:hover .eye{
  /*transform:translateX(0);*/
  opacity:1;
}
</style>