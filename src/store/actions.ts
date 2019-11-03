import * as types from '@/store/mutation-types'
import { Games } from '../api'

export default {
  fetchGames: ({ commit, state }: { commit: any, state: any }) => {
    return Games.fetch()
      .then((games) => {
        console.log(types.FETCH_GAMES)
        console.log(games)

        commit(types.FETCH_GAMES, games)
      })
      .catch(err => { throw err })
  }
}
