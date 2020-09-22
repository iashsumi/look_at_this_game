import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Videos from '../views/Videos.vue'
import Players from '../views/Players.vue'
import Top from '../views/Top.vue'
import Thread from '../views/Thread.vue'
import Threads from '../views/Threads.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/playerlist',
    name: 'PLayers',
    component: Players
  },
  {
    path: '/thread/:id',
    name: 'Thread',
    component: Thread
  },
  {
    path: '/threads',
    name: 'Threads',
    component: Threads
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
