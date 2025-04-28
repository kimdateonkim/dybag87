<template>
  <div>
    <nav>
      <RouterLink to="/slot">slot</RouterLink>
      <span> | </span>
      <RouterLink to="/parent">ParentComponent</RouterLink>
      <span> | </span>
      <RouterLink to="/emit">Emit</RouterLink>
      <span> | </span>
      <RouterLink to="/main">Main</RouterLink>
      <span> | </span>
      <RouterLink to="/">MyComponent</RouterLink>
      <span> | </span>
      <RouterLink to="/watchex">WatchEx</RouterLink>
      <span> | </span>
      <RouterLink to="/watch">Watch</RouterLink>
      <span> | </span>
      <RouterLink to="/watch2">Watch2</RouterLink>
      <span> | </span>
    </nav>
    <!--현재 경로에 매핑된 컴포넌트가 렌더링됨-->
    <RouterView></RouterView>
  </div>
</template>

<script>

  export default {

  }
</script>

<style scoped>

</style>
