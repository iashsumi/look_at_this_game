import * as types from '@/store/mutation-types'
import { Players, Videos } from '../api'

export default {
  fetchPlayers: ({ commit, state }: { commit: any, state: any }) => {
    return Players.fetch()
      .then((Players) => {
        console.log(types.FETCH_PLAYERS)
        console.log(Players)

        commit(types.FETCH_PLAYERS, Players)
      })
      .catch(err => { throw err })
  },
  fetchVideos: ({ commit, state }: { commit: any, state: any }) => {
    return Videos.fetch()
      .then((videos) => {
        commit(types.FETCH_VIDEOS, videos)
      })
      .catch(err => { throw err })
  }
}
