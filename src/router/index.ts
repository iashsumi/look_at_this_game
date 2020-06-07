import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Videos from '../views/Videos.vue'
import Players from '../views/Players.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/playerlist',
    name: 'PLayers',
    component: Players
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
