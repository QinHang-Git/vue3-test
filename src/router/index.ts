import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import Shop from '@/views/shop/index.vue'
import Joke from '@/views/joke/index.vue'
import Profile from '@/views/profile/index.vue'

import Login from '@/components/login/index.vue'
import Business from '@/views/index.vue'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    redirect: '/business' 
  },
  {
    path: '/business',
    name: 'Business',
    component: Business,
    children:[
      {
        path: '/business/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/business/shop',
        name: 'Shop',
        component: Shop
      },
      {
        path: '/business/joke',
        name: 'Joke',
        component: Joke
      },
      {
        path: '/business/profile',
        name: 'Profile',
        component: Profile
      },
    ]
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
