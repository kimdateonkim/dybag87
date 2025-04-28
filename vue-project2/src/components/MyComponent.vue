<template>
  <div>
    <!--부모 컴포넌트에서 자식 컴포넌트로 데이터 전달하기-->
    <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/>
    <!--동적 props전달-->
    <PageTitle v-bind:title="title"/>
  </div>
</template>

<script>
import PageTitle from './PageTitle.vue'
import { ref } from 'vue'

export default {
  components: {PageTitle},
  setup () {
    const title = ref('동적 페이지 타이틀')

    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>