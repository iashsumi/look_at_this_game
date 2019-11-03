import * as types from '@/store/mutation-types'

export default {
  [types.FETCH_GAMES] (state: any, payload: any) {
    state.list.games = payload
  }
}
