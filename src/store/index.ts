import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  getters: {
    drawer: state => {
      return state.drawer
    }
  },
  mutations: {
    [types.DRAWER_UPDATE] (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    // [types.DRAWER_UPDATE] ({ commit }) {
    //   commit(types.DRAWER_UPDATE)
    // }
  },
  modules: {
  }
})
