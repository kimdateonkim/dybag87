<template>
  <div style="text-align: center;">
    <div class="box">
      <h1>초기화면</h1>
    </div>
    <div class="box">
      <button @click="startGame">게임시작</button>
    </div>
  </div>
</template>

<script>
export default {
  setup (props, { emit }) {//emit을 두번째 인자로 받아옵니다
    //startGame 메서드 생성
    const startGame = () => {
      // console.log('start-game')
      
      //버튼을 클릭하면 부모 컴포넌트에게 start-game 이벤트를 전달
      emit('start-game')
    }

    return {
      startGame,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>