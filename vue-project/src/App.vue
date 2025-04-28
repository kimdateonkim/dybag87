<template>
  <nav>
    <!--탐색을 위한 router-link 컴포넌트를 사용-->
    <!--to라는 prop으로 링크를 지정-->
    <!--<router-link>는 href 속성이 있는 a태그로 렌더링 됨-->
      <RouterLink to="/">Home</RouterLink>
      <span> | </span>
      <RouterLink to="/about">About</RouterLink>
  </nav>
  <main>
    <!--경로 출력-->
    <!--현재 경로에 매핑된 컴포넌트가 렌더링됨-->
    <RouterView></RouterView>
  </main>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>