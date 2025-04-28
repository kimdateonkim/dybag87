<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  props: {
    title: {
      type: String, //데이터의 타입 설정
      default: '페이지 제목' //default값 설정
    }
  },
  setup (props) {//부모 컴포넌트에서 전달받은 데이터를 props로 전달 받음
    //props의 title속성값을 title상태변수 할당
    const title = ref(props.title)

    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>