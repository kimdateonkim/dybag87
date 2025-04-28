<template>
  <div>
    <h1>Full Name : {{ fullName }}</h1>
    <!--input을 추가하고 v-model을 사용하여 필드값을 수정하면 firstName과 lastName이 자동으로 업데이트 되도록 합니다-->
    <label>FirstName : <input v-model="firstName" type="text" /></label><br>
    <label>lastName : <input v-model="lastName" type="text" /></label>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  setup () {

    const firstName = ref("장");
    const lastName = ref("민규");
    
    const fullName = computed(() => {
      //firstName과 lastName을 붙여서 리턴
      return firstName.value + " " + lastName.value
    })

    return {
      firstName,
      lastName,
      fullName,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>