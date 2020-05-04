import * as types from '@/store/mutation-types'
import { Players, Videos } from '../api'

export default {
  fetchPlayers: ({ commit, state }: { commit: any, state: any }) => {
    return Players.fetch()
      .then((Players) => {
        commit(types.FETCH_PLAYERS, Players)
      })
      .catch(err => { throw err })
  },
  fetchVideos: ({ commit, state }: { commit: any, state: any }, key: string) => {
    return Videos.fetch(key)
      .then((videos: any) => {
        commit(types.PAGING_KEY, videos.paging_key)
        commit(types.FETCH_VIDEOS, state.videos.concat(videos.items))
      })
      .catch(err => { throw err })
  }
}
