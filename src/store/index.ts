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
  top: null,
  thread: null,
  article: null,
  paging_key: null
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
