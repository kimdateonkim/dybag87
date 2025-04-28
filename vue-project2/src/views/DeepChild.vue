<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ defaultMSG }}</h2>
    <button @click="updateMSG">업데이트</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup () {
    //상위 컴포넌트에서 provide로 전달된 데이터를 inject로 받아올 수 있다
    const {msg, updateMSG} = inject('msg')
    //기본값 설정
    const defaultMSG = inject('defaultMSG', 'default Message')

    return {
      msg,
      defaultMSG,
      updateMSG
    }
  }
}
</script>

<style scoped>

</style>