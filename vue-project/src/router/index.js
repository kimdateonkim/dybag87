//vue-router를 연결(임포트)
import { createRouter, createWebHistory } from 'vue-router'
//HomeView와 aboutView컴포넌트를 임포트
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

//경로를 정의하고, 각 경로를 컴포넌트와 매핑
const routes = [
  {
    //path : 브라우저에서 접속하는 url주소를 정의
    path: '/',
    name: 'home',
    //component : 지정된 path로 들어왔을때 보여줄 vue컴포넌트, 앞으로 구현할 vue파일을 연결하고, 해당 파일을 실행 시킵니다
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

//routes를 옵션으로 전달해 라우터 인스턴스를 생성
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

//router 내보내기 => 외부문서에서 라우터 인스턴스로 접근이 가능해짐
export default router

