export default {
  getPlayers: (state: any) => {
    return state.players
  },
  getVideos: (state: any) => {
    return state.videos
  },
  getPagingKey: (state: any) => {
    return state.paging_key
  }
}
