export default {
  getPlayers: (state: any) => {
    return state.players
  },
  getGames: (state: any) => {
    return state.list.games
  },
  getGame: (state: any) => {
    return state.game
  },
  getRss: (state: any) => {
    return state.rss
  }
}
