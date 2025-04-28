<template>
  <div>
    <!--
    템플릿 문법({{  }})은 간단히 사용하면 매우 편리합니다
    하지만 템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수가 어려워집니다.
    -->
    <p>해당 언어가 존재 하나요?</p>
    <!--템플릿 표현식은 복잡해지며 선언적이지 않습니다-->
    <span>{{ coding.language.length > 0 ? 'Yes' : 'No' }}</span>
    <br>
    <!--hasLanguage를 호출-->
    <span>{{ hasLanguage }}</span>
    <!--fullName출력-->
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script>
//계산된 속성(computed)를 사용하면 좀더 효율적으로 코드를 작성할 수 있습니다
import { reactive, computed, ref } from 'vue'

export default {
  setup () {
    const coding = reactive({
      name: '코딩언어',
      language: [
        'HTML/CSS',
        'Javascript',
        'Vue3'
      ]
    })

    const hasLanguage = computed(() => {
      return coding.language.length > 0 ? 'Yes' : 'No'
    })

    //상태 변수로 성과 이름을 생성
    const firstName = ref("홍");
    const lastName = ref("길동");

    const fullName = computed({
      get(){//getter로 성과 이름을 연결하여 반환
        return firstName.value + " " + lastName.value
      },
      set(newValue){
        //전달받은 newValue매개변수 값을 split함수로 배열로 분해하여 구조 분해 할당
        [firstName.value, lastName.value] = newValue.split(' ');
      }
    })

    fullName.value = "임 다혜"

    return {
      coding,
      hasLanguage,
      fullName,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>