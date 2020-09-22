export default {
  getPlayers: (state: any) => {
    return state.players
  },
  getVideos: (state: any) => {
    return state.videos
  },
  getTop: (state: any) => {
    return state.top
  },
  getPagingKey: (state: any) => {
    return state.paging_key
  },
  getThread: (state: any) => {
    return state.thread
  },
  getThreads: (state: any) => {
    return state.threads
  }
}
