import * as types from '@/store/mutation-types'

export default {
  [types.FETCH_GAMES] (state: any, payload: any) {
    state.list.games = payload
  },
  [types.FETCH_GAME] (state: any, payload: any) {
    state.game = payload
  },
  [types.FETCH_VIDEOS] (state: any, payload: any) {
    state.videos = payload
  },
  [types.FETCH_PLAYERS] (state: any, payload: any) {
    state.players = payload
  }
}
