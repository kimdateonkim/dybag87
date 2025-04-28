<template>
  <div style="text-align: center;">
    <div class="box">
      <h1>게임 종료 화면</h1>
    </div>
    <div class="box">
      <button @click="playAgain">처음으로</button>
    </div>
  </div>
</template>

<script>
export default {
  setup (props, {emit}) {
    
    const playAgain = () => {
      emit('play-again')
    }

    return {
      playAgain
    }
  }
}
</script>

<style lang="scss" scoped>

</style>