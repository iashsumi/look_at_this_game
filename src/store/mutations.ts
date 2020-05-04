import * as types from '@/store/mutation-types'

export default {
  [types.FETCH_VIDEOS] (state: any, payload: any) {
    state.videos = payload
  },
  [types.FETCH_PLAYERS] (state: any, payload: any) {
    state.players = payload
  }
}
