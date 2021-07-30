import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import Shop from '@/views/shop/index.vue'
import Joke from '@/views/joke/index.vue'
import Profile from '@/views/profile/index.vue'

import ProfileInfo from '@/views/profile/childViews/ProfileInfo.vue'
import LoginAndReg from '@/views/profile/childViews/LoginAndReg.vue'
import UserList from '@/views/profile/childViews/UserList.vue'
import Business from '@/views/index.vue'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    redirect: '/business' 
  },
  {
    path: '/business',
    name: 'Business',
    redirect: '/business/home',
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
    component: LoginAndReg
  },
  {
    path:'/logout',
    name: 'Logout',
    component: ProfileInfo  
  },
  {
    path:'/userList',
    name: 'UserList',
    component: UserList  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
