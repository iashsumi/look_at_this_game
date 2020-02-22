export default {
  getPlayers: (state: any) => {
    return state.players
  },
  getVideos: (state: any) => {
    return state.videos
  },
  getGames: (state: any) => {
    return state.list.games
  },
  getGame: (state: any) => {
    return state.game
  }
}
