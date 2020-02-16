import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutation-types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  list: {
    games: []
  },
  players: [],
  game: null,
  rss: []
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
