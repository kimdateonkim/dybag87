// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//router 임포트
import router from './router'


//앱이 라우터를 인식하도록, 라우터 인스턴스가 use()로 등록 됨
createApp(App).use(router).mount('#app')
