import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'
// import GameList from '../views/GameList.vue'
// import Game from '../views/Game.vue'
import Videos from '../views/Videos.vue'
import Players from '../views/Players.vue'
import PlayerDetail from '../views/PlayerDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Introduction',
    component: Introduction
  },
  // {
  //   path: '/gamelist',
  //   name: 'GameList',
  //   component: GameList
  // },
  // {
  //   path: '/game/:id',
  //   name: 'Game',
  //   component: Game
  // },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/players',
    name: 'PLayers',
    component: Players
  },
  {
    path: '/playerdetail',
    name: 'PlayerDetail',
    component: PlayerDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
