<template>
  <div>
    <div>{{ state.count }}</div>
    <!--
      템플릿에서 사용할 때는 자동으로 내부값(value)을 풀어내기 때문에 .value를 추가할 필요 없이 사용할 수 있습니다
    -->
    <span>{{ count }}</span><br>
    <button @click="count++">카운트 증가</button>
  </div>
</template>

<script>
//reactive()함수로 반응형 상태 생성
//반응형 객체를 구조 분해하려면 toRefs 또는 toRef를 사용해야 한다
//readonly = 반응형 객체의 변경을 방지
import { ref, reactive, toRefs, readonly, onMounted, onBeforeMount, onUpdated } from 'vue'

export default {
  setup () {
    //콘솔에 setup을 출력
    console.log('setUp')

    //훅 사용
    //라이프사이클 훅은 컴포넌트가 생성될 때 또는 특정 단계에서 코드를 실행할 수 있게 해주는 함수입니다
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onUpdated(() => {
      console.log('update component')
    })

    const original = reactive({count : 0})
    const copy = readonly(original)
    //console.log(original.count++)
    //값이 증가되지 않습니다
    //console.log(copy.count++)
    //console.log(copy.count)

    //기본타입을 반응형으로 만들고자 할 때는 ref메소드를 사용합니다
    const count = ref(1)
    
    //반응형 상태 = 값을 {}로 묶어서 객체로 전달해야 합니다
    const state = reactive({count})

    //console.log(count.value)//ref로 생성한 반응형 상태는 value로 값을 읽어올수 있음
    //console.log(state.count)//reactive로 생성한 반응형 상태는 키값으로 값을 읽어올수 있음

    const book = reactive({
      author : 'Vue Team',
      year : '2025',
      title : 'Vue 3 Guide',
      description: "당신은 이 책을 지금 바로 읽습니다",
      price : '무료'
    })
    //구조 분해 할당 = 객체 또는 배열을 분해하여 새로운 변수로 재할당하는 것
    //반응형 객체의 속성과 동기화하여 반응형 연결을 유지
    let {author, title} = toRefs(book)

    title.value = 'Vue 3 상세 Guide'
    //console.log(author.value, title.value)
    return {
      state,
      count,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>