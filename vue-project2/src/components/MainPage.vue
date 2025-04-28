<template>
  <div>
    <h1>메인페이지</h1>
    <!--author를 자식 컴포넌트로 전달-->
    <WriterPage v-bind:author="author" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import WriterPage from './WriterPage.vue'

export default {
  components: {WriterPage},
  setup () {
    const author = reactive({
      name: "신형만",
      company: "떡잎 상사"
    })

    return {
      author
    }
  }
}
</script>

<style lang="scss" scoped>

</style>