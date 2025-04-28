<template>
  <div>
    <button type="button" @click="changeX">{{ x }}</button>
    <hr>
  </div>
</template>

<script>
//첫번째 매개변수는 다양한 타입이 될 수 있습니다.
//(ref, reactive, computed, getter함수, Array)
//watch(Source Type, (newValue, oldvalue) => {})

import {ref, watch} from 'vue'

export default {
  setup () {
    const x = ref(0) 
    const y = ref(10)
    
    watch(x, (newX) => {
      // console.log(`x is ${newX}`)
    }, {immediate: true}) //immediate옵션을 사용하여 최초에 즉시 실행할 수 있다

    //getter
    watch(
      () => x.value + y.value,
      (sum) => {
        // console.log(`sum of x + y is: ${sum}`)
      }
    )

    //소스가 여러개일 경우
    watch([x, () => y.value], ([newX, newY]) => {
      console.log(`x is ${newX} and y is ${newY}`)
    })
    
    //x값을 변경하는 메서드
    const changeX = () => {
      x.value++; //x값을 증가
    }

    return {
      x,
      changeX
    }
  }
}
</script>

<style lang="scss" scoped>

</style>