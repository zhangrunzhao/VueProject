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
    path: '/base',
    name: 'Base',
    component: () => import(/* webpackChunkName: "about" */ '../views/base.vue')
  },
  {
    path: '/index/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail.vue')
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: "about" */ '../views/shoppingCart.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import(/* webpackChunkName: "about" */ '../views/notes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
