export default {
  getPlayers: (state: any) => {
    return state.players
  },
  getVideos: (state: any) => {
    return state.videos
  },
  getVideo: (state: any) => {
    return state.video
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
  },
  getRanking: (state: any) => {
    return state.ranking
  },
  getArticle: (state: any) => {
    return state.article
  },
  getArticles: (state: any) => {
    return state.articles
  },
  getArticleSearchResult: (state: any) => {
    return state.article_search_result
  }
}
