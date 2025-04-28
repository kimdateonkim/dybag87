<template>
  <div>
    <!--버튼을 클릭하면 이름이 변경됩니다-->
    <button type="button" @click="changeName">변경</button>
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup () {
    const firstName = ref('Minkyu')
    const lastName = ref('Jang')
    const fullName = ref('')

    //firstName과 lastName이 변경될 때 fullName을 업데이트
    watch([firstName, lastName], () => {
      fullName.value = firstName.value + ' ' + lastName.value
    })

    //이름을 변경하는 함수
    const changeName = () => {
      firstName.value = 'Eunsol'
    }

    //초기 fullName을 설정
    fullName.value = firstName.value + ' ' + lastName.value

    return {
      firstName,
      lastName,
      fullName,
      changeName
    }
  }
}
</script>

<style scoped>

</style>