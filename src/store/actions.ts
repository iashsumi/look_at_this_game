import * as types from '@/store/mutation-types'
import { Players, Rss } from '../api'

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
  // fetchGame: ({ commit, state }: { commit: any, state: any }) => {
  //   return Games.show()
  //     .then((game) => {
  //       console.log(types.FETCH_GAME)
  //       console.log(game)

  //       commit(types.FETCH_GAME, game)
  //     })
  //     .catch(err => { throw err })
  // },
  fetchRss: ({ commit, state }: { commit: any, state: any }) => {
    console.log('OK2')
    return Rss.fetch()
      .then((rss) => {
        commit(types.FETCH_RSS, rss)
      })
      .catch(err => { throw err })
  }
}
