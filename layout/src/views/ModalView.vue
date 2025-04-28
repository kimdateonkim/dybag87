<template>
  <section class="modal">
    <div class="container">
      <!--클릭시 부모컴포넌트의 close-modal이벤트를 호출-->
      <span class="close" @click="closeModal">&times;</span>
      <div class="imgGroup">
        <img v-bind:src="imagePath" alt="" />
      </div>
      <div class="txt">
        <h1>{{ productName }}</h1>
        <p>
          <span>가격 : </span>
          <span>{{ price }}원</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  //props정의
  props:{
    item:{
      type:Object,
      default: () => ({}),//prop이 전달되지 않으면 기본값으로 빈 객체를 반환하는 함수 설정
    }
  },
  setup (props, {emit}) {
    //props의 item에서 필요한 정보를 추출
    const imagePath = props.item.path
    const productName = props.item.name
    const price = props.item.price

    //모달창을 닫는 함수
    const closeModal = () => {
      //emit을 통해 부모 컴포넌트에 close-modal 이벤트와 false값을 전달 
      emit("close-modal", false)
    }

    return {
      imagePath,
      productName,
      price,
      closeModal
    }
  }
}
</script>

<style>
.modal{
  position:fixed;
  top:0; left:0; bottom:0; right:0;
  background-color:rgba(0,0,0,0.8);
  z-index: 999;
}
.container{
  width:600px;
  margin:100px auto 0;
  background-color:#fff;
  display:flex;
  position:relative;
  animation:scale 0.3s ease;
}
@keyframes scale {
  0%{opacity:0; transform: scale(0);}
  100%{opacity:1; transform: scale(1);}
}
.imgGroup > img{display:block;}
.txt{
  padding:20px;
}
.close{
  position:absolute;
  top:10px; right:10px;
  cursor:pointer;
  font-size:30px;
}
.close:hover{color:red;}
</style>