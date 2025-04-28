<template>
  <div>
    <h1>Home Page</h1>
    <label>FirstName : <input v-model="firstName" type="text" /></label><br>
    <label>LastName : <input v-model="lastName" type="text" /></label>
    <p>Full Name : {{ fullName }}</p>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const firstName = ref('')
    const lastName = ref('')

    //router등록
    const router = useRouter();

    //fullName은 firstName과 lastName을 결합하여 계산됨
    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value
    })

    //watch로 fullName을 감시하고, fullName이 특정 조건을 만족하면 Profile페이지로 이동
    watch(fullName, (newFullName) => {
      if(newFullName === 'MK Jang'){
        //fullName이 MK Jang이면 Profile페이지로 라우팅
        router.push('/profile')
      }
    })
    
    return {
      firstName,
      lastName,
      fullName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>