import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroSection from '@/components/hero-section.vue'
import MenSection from '@/components/men-section.vue'
import WomenSection from '@/components/women-section.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: HeroSection
  },
  {
    path: '/pria',
    name: 'Pria',
    component: MenSection
  },
  {
    path: '/wanita',
    name: 'Wanita',
    component: WomenSection
  },
  
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes
})

export default router