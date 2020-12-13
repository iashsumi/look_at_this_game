import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutation-types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  players: [],
  videos: [],
  threads: [],
  articles: [],
  ranking: [],
  article_search_result: [],
  game_search_result: [],
  games: [],
  top: null,
  thread: null,
  video: null,
  article: null,
  game: null,
  paging_key: null
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
