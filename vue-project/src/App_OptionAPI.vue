<script>
export default {
  data() {
    return { //counter상태 생성
      counter: 0,
    }
  },
  methods: {
    increment(){//increament메소드를 호출하면 counter값을 1증가
      this.counter++;
    }
  },
  mounted(){ //mounted 훅 = App컴포넌트가 마운트 됬을때 실행
    console.log("애플리케이션이 마운트 되었습니다")
  }
}
</script>

<template>
  <div>
    <!--버튼을 클릭하면 increment메서드를 호출-->
    <button @click="increment">Counter: {{ counter }}</button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
