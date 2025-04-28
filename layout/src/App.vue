<template>
  <!--컴포넌트 사용-->
  <app-header />
  <RouterView />
  <app-footer />
</template>
  
<script>
  import { RouterLink, RouterView } from 'vue-router'
  //컴포넌트를 불러옴
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    //컴포넌트 등록
    components: { AppHeader, AppFooter }
  }
 </script>

<style scoped>

</style>
