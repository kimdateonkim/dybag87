<template>
  <section id="banner">
    <swiper 
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination = "{
        clickable: true,
      }"
      :navigation="true" 
      :modules="modules" 
      class="mySwiper"
    >
      <!--index값을 key로 images에 할당한 이미지 갯수 만큼 요소 추가-->
      <swiper-slide :key="i" v-for="(image,i) in images">
        <!--이미지  요소의 src경로를 image.src로 설정-->
        <img :src="image.src" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
//스와이퍼 컴포넌트 등록
import { Swiper, SwiperSlide } from 'swiper/vue'

//스와이퍼 스타일 등록
import 'swiper/css'

//스와이퍼의 내비게이션 스타일
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//내비게이션 모듈
import { Navigation, Pagination } from 'swiper/modules'

import { ref } from 'vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {//setup에서 Nanigation모듈을 리턴
    const images = ref([
      { src: new URL('../assets/images/banner1.png', import.meta.url).href },
      { src: new URL('../assets/images/banner2.png', import.meta.url).href },
      { src: new URL('../assets/images/banner3.png', import.meta.url).href },
      { src: new URL('../assets/images/banner4.png', import.meta.url).href },
    ])
    return {
      modules: [Navigation, Pagination],
      images
    }
  }
}
</script>

<style scoped></style>