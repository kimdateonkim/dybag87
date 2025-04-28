<template>
  <div>
    <button @click="increment">Counter : {{ counter }}</button>   
  </div>
</template>

<script>
//ref메서드를 임포트, onMounted 훅도 임포트
import {onMounted, ref} from 'vue'
export default {
  setup () {
    //셋업 함수 안에 counter값을 ref메서드로 초기값을 0으로 할당
    const counter = ref(0);
    
    //increment함수가 호출되면 counter값을 1증가 => vue3부터는 메서드에서 상태값을 불러올때 this를 사용하지 않습니다 상태변수.value로 상태값을 불러올 수 있습니다
    const increment = () => counter.value++;

    //app컴포넌트가 마운트(렌더링)되면 콘솔에 출력
    onMounted(() => {
      console.log("애플리케이션이 마운트 되었습니다")
    })

    //counter와 increment를 리턴
    return {
      counter,
      increment
    }
  }
}
</script>

<style lang="scss" scoped>

</style>