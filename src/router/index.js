import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroSection from '@/components/hero-section.vue'
import MenSection from '@/components/men-section.vue'
import WomenSection from '@/components/women-section.vue'
import UnavailableProductSection from '@/components/unavailable-product.vue'

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
    path: '/pria/:id',
    name: 'PriaDetail',
    component: MenSection,
    props: true 
  },
  {
    path: '/pria/unavailable-product/:id',
    name: 'PriaUnavailable',
    component: UnavailableProductSection,
    props: (route) => ({ 
      id: route.params.id,
      category: 'men' 
    })
  },
  {
    path: '/wanita',
    name: 'Wanita',
    component: WomenSection
  },
  {
    path: '/wanita/:id',
    name: 'WanitaDetail', 
    component: WomenSection,
    props: true
  },
  {
    path: '/wanita/unavailable-product/:id',
    name: 'WanitaUnavailable',
    component: UnavailableProductSection,
    props: (route) => ({ 
      id: route.params.id,
      category: 'women' 
    })
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