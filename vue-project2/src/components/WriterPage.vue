<template>
  <div>
    <h2>{{ author.name }}</h2>
    <h2>{{ author.company }}</h2>
  </div>
</template>

<script>
import {reactive} from 'vue'

export default {
  props:{
    author: {
      type: Object,
    }
  },
  setup (props) {
    //부모컴포넌트에서 전달받은 데이터가 객체이기 때문에 객체로 담아줘야 합니다
    const author = reactive(props.author)
    console.log(author)
    return {
      author
    }
  }
}
</script>

<style lang="scss" scoped>

</style>