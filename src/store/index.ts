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
  top: null,
  thread: null,
  paging_key: null
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
