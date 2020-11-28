import * as types from '@/store/mutation-types'

export default {
  [types.PAGING_KEY] (state: any, payload: any) {
    state.paging_key = payload
  },
  [types.FETCH_VIDEOS] (state: any, payload: any) {
    state.videos = payload
  },
  [types.FETCH_VIDEO] (state: any, payload: any) {
    state.video = payload
  },
  [types.FETCH_PLAYERS] (state: any, payload: any) {
    state.players = payload
  },
  [types.FETCH_TOP] (state: any, payload: any) {
    state.top = payload
  },
  [types.FETCH_THREAD] (state: any, payload: any) {
    state.thread = payload
  },
  [types.FETCH_THREADS] (state: any, payload: any) {
    state.threads = payload
  },
  [types.FETCH_RANKING] (state: any, payload: any) {
    state.ranking = payload
  },
  [types.FETCH_ARTICLE] (state: any, payload: any) {
    state.article = payload
  },
  [types.FETCH_ARTICLES] (state: any, payload: any) {
    state.articles = payload
  }
}
