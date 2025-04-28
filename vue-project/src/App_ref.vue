<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <!--버튼생성-->
    <button @click="addReactiveMessage">Add message</button>
    
    <h2>일반 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button @click="addNormalMessage">Add message</button>
  </div>
</template>

<script>
//ref=반응형 상태를 선언하기 위한 메서드
//isRef = 반응형 데이터인지 아닌지 검사하는 API
import {ref, isRef} from 'vue'

export default {
  setup () {
    //반응형 상태 선언 = 값이 변경되면 자동으로 업데이트 해줍니다
    const reactiveMessage = ref('Reactive Message')
    
    //버튼을 클릭하면 !를 추가
    const addReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + '!';
    }
    
    //일반 변수 선언 = 일반 변수는 반응형이 아니므로 vue에서 사용하지 않습니다
    let normalMessage = 'Normal Message'
    //버튼을 클릭하면 !를 추가
    const addNormalMessage = () => {
      normalMessage = normalMessage + '!';
    }
    
    //isRef로 데이터를 확인하면 반응형데이터인지 아닌지 true 또는 false로 알려준다
    console.log(isRef(reactiveMessage)) //true
    console.log(isRef(normalMessage)) //false

    return {
      reactiveMessage,
      normalMessage,
      addReactiveMessage, //메서드를 사용할 수 있게 리턴에 추가
      addNormalMessage,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>