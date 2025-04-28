import { createRouter, createWebHistory } from "vue-router";
import VueWatch from '@/components/VueWatch.vue';
import VueWatch2 from '@/components/VueWatch2.vue';
import WatchEx from '@/components/WatchEx.vue';
import Profile from '@/components/Profile.vue';
import MyComponent from "@/components/MyComponent.vue";
import MainPage from "@/components/MainPage.vue";
import Emit from '@/components/Emit.vue'
import ParentComponent from "@/views/ParentComponent.vue";
import SlotEx from "@/views/SlotEx.vue";

const routes = [
  {
    path: '/',
    component: MyComponent
  },
  {
    path: '/slot',
    component: SlotEx
  },
  {
    path: '/parent',
    component: ParentComponent
  },
  {
    path: '/emit',
    component: Emit
  },
  {
    path: '/main',
    component: MainPage
  },
  {
    path: '/watchex',
    component: WatchEx
  },
  {
    path: '/profile', 
    component: Profile
  },
  {
    path: '/watch',
    component: VueWatch
  },
  {
    path: '/watch2', 
    component: VueWatch2
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router;