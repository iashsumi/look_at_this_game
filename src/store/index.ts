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
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
  // state: {
  //   drawer: false
  // },
  // getters: {
  //   drawer: state => {
  //     return state.drawer
  //   }
  // },
  // mutations: {
  //   [types.DRAWER_UPDATE] (state) {
  //     state.drawer = !state.drawer
  //   }
  // },
  // actions: {
  //   // [types.DRAWER_UPDATE] ({ commit }) {
  //   //   commit(types.DRAWER_UPDATE)
  //   // }
  // },
  // modules: {
  // }
})
