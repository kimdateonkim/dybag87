<template>
  <div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';
import {provide, ref} from 'vue'

export default {
  components: {Footer},
  setup () {
    //반응성 데이터 사용
    const msg = ref('Hello World!')
    //updateMSG함수가 호출되면 message값을 변경함
    const updateMSG = () => {
      msg.value = "world!"
    }
    //첫번째 파라미터 = 주입 키 : 하위 컴포넌트에서 주입된 값을 조회
    //두번째 파라미터 = 제공된 값 : 반응성 데이터(refs)를 포함하여 모든 유형이될 수 있다
    //injector 내부 컴포넌트에서 반응성 데이터를 변경해야 하는 경우 데이터 변경을 제공하는 함수를 함께 제공
    provide('msg', {msg, updateMSG})
    return {
      msg
    }
  }
}
</script>

<style scoped>

</style>