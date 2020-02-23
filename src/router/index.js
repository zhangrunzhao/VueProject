import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/',
    redirect:"/index"
  },
  {
    path: '/base',
    name: 'Base',
    component: () => import( '../views/base.vue')
  },
  {
    path: '/index/detail',
    name: 'Detail',
    component: () => import( '../views/detail.vue')
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import( '../views/shoppingCart.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('../views/notes.vue')
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: () => import('../views/userLogin.vue')
  },
  {
    path: '/userRegister',
    name: 'UserRegister',
    component: () => import( '../views/userRegister.vue')
  },
  {
    path: '/user',
    name: 'User',
    redirect:"/user/myIndex",
    component: () => import('../views/user.vue'),
    children:[
      {
        path: 'myIndex',
        name: 'MyIndex',
        component: () => import('@/components/user/index.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
