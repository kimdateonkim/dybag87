<template>
  <div style="text-align: center;">
    <div class="box">
      <h1>게임 화면</h1>
    </div>
    <div class="box">
      <!--버튼을 클릭하면 stopGame메서드 호출-->
      <button @click="stopGame">게임오버</button>
    </div>
  </div>
</template>

<script>
export default {
  setup (props, { emit }) {
    
    const stopGame = () => {
      //부모에게 stop-game 이벤트를 전달
      emit('stop-game')
    }
    return {
      stopGame
    }
  }
}
</script>

<style lang="scss" scoped>

</style>