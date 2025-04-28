<template>
  <!--emit으로 부모 컴포넌트로 이벤트를 전달할 수 있다-->
  <div class="container">
    <!--초기 화면 : status가 begin이면 표시-->
    <div v-if="status === 'begin'">
      <!--start-game이벤트가 발생되면 startGame메서드를 호출-->
      <GameBegin @start-game="startGame" />
    </div>
    <!--게임 화면 : status가 gaming이면 표시-->
    <div v-if="status === 'gaming'">
      <!--stop-game이벤트가 발생되면 stopGame메서드를 호출-->
      <GameStart @stop-game="stopGame"/>
    </div>
    <!--게임종료 화면 : status가 stopping이면 표시-->
    <div v-if="status === 'stopping'">
      <!--play-agin이벤트가 발생되면 playAgain메서드를 호출-->
      <PlayAgain @play-again="playAgain"/>
    </div>
  </div>
</template>

<script>
import GameBegin from './GameBegin.vue'
import GameStart from './GameStart.vue'
import PlayAgain from './PlayAgain.vue'

import { ref } from 'vue'

export default {
  components : {GameBegin, GameStart, PlayAgain},
  setup () {
    const status = ref("begin")//상태 관리

    //게임 시작
    const startGame = () => {
      //status값을 gaming으로 변경
      status.value = 'gaming'
    }

    //게임 종료
    const stopGame = () => {
      status.value = 'stopping'
    }

    //다시 시작
    const playAgain = () => {
      status.value = 'begin'
    }

    return {
      status,
      startGame,
      stopGame,
      playAgain,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>