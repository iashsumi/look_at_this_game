import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Videos from '../views/Videos.vue'
import Players from '../views/Players.vue'
import Top from '../views/Top.vue'
import Thread from '../views/Thread.vue'
import Threads from '../views/Threads.vue'
import VideoPlayer from '../views/VideoPlayer.vue'
import Article from '../views/Article.vue'
import Articles from '../views/Articles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top,
    meta: { title: 'TOPページ', desc: '最新のゲーム動画、スレのまとめをご紹介！' }
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
    meta: { title: 'ゲーム実況アンテナ', desc: '最新のゲーム動画のアンテナ' }
  },
  {
    path: '/playerlist',
    name: 'PLayers',
    component: Players,
    meta: { title: 'ゲーム実況者', desc: 'ゲーム実況者一覧' }
  },
  {
    path: '/thread/:id',
    name: 'Thread',
    component: Thread,
    meta: { title: 'スレまとめ', desc: 'ゲーム関連スレのまとめ' }
  },
  {
    path: '/threads',
    name: 'Threads',
    component: Threads,
    meta: { title: 'ゲーム情報スレまとめ一覧', desc: 'ゲーム関連スレ一覧' }
  },
  {
    path: '/videoplayer/:id',
    name: 'VideoPlayer',
    component: VideoPlayer,
    meta: { title: '動画再生', desc: 'ゲーム動画を再生' }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
    meta: { title: 'スレまとめ', desc: 'ゲーム関連スレのまとめ' }
  },
  {
    path: '/articles/',
    name: 'Articles',
    component: Articles,
    meta: { title: 'スレまとめ', desc: 'ゲーム関連スレのまとめ' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
