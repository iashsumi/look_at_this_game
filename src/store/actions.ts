import * as types from '@/store/mutation-types'
import { Players, Videos, Top, Threads, Articles, Ranking, Games } from '../api'

export default {
  fetchPlayers: ({ commit, state }: { commit: any, state: any }) => {
    return Players.fetch()
      .then((res: any) => {
        commit(types.FETCH_PLAYERS, res.commentators)
      })
      .catch(err => { throw err })
  },
  fetchVideos: ({ commit, state }: { commit: any, state: any }, key: any) => {
    return Videos.fetchList(key)
      .then((res: any) => {
        const pagingKey = {
          'total_count': res.meta.total_count,
          'total_pages': res.meta.total_pages,
          'current_page': res.meta.current_page
        }
        commit(types.PAGING_KEY, pagingKey)
        if (key) {
          commit(types.FETCH_VIDEOS, state.videos.concat(res.videos))
        } else {
          commit(types.FETCH_VIDEOS, res.videos)
        }
      })
      .catch(err => { throw err })
  },
  fetchVideo: ({ commit, state }: { commit: any, state: any }, id: String) => {
    return Videos.fetch(id)
      .then((res: any) => {
        commit(types.FETCH_VIDEO, res)
        return res
      })
      .catch(err => { throw err })
  },
  fetchTop: ({ commit, state }: { commit: any, state: any }) => {
    return Top.fetch()
      .then((res: any) => {
        commit(types.FETCH_TOP, res)
      })
      .catch(err => { throw err })
  },
  fetchThread: ({ commit, state }: { commit: any, state: any }, id: bigint) => {
    // ページ切り替え時に前のデータが一瞬残っているので最初に初期化
    commit(types.FETCH_THREAD, null)
    return Threads.fetch(id)
      .then((res: any) => {
        commit(types.FETCH_THREAD, res)
        return res
      })
      .catch(err => { throw err })
  },
  fetchThreads: ({ commit, state }: { commit: any, state: any }, type: bigint) => {
    return Threads.fetchList(type)
      .then((res: any) => {
        commit(types.FETCH_THREADS, res.sc_threads)
      })
      .catch(err => { throw err })
  },
  fetchArticle: ({ commit, state }: { commit: any, state: any }, id: bigint) => {
    // ページ切り替え時に前のデータが一瞬残っているので最初に初期化
    commit(types.FETCH_ARTICLE, null)
    return Articles.fetch(id)
      .then((res: any) => {
        commit(types.FETCH_ARTICLE, res)
        return res
      })
      .catch(err => { throw err })
  },
  fetchArticles: ({ commit, state }: { commit: any, state: any }, key: any) => {
    return Articles.fetchList(key)
      .then((res: any) => {
        const pagingKey = {
          'total_count': res.meta.total_count,
          'total_pages': res.meta.total_pages,
          'current_page': res.meta.current_page
        }
        commit(types.PAGING_KEY, pagingKey)
        if (key) {
          commit(types.FETCH_ARTICLES, state.articles.concat(res.articles))
        } else {
          commit(types.FETCH_ARTICLES, res.articles)
        }
        return res
      })
      .catch(err => { throw err })
  },
  searchArticles: ({ commit, state }: { commit: any, state: any }, params: any) => {
    return Articles.search(params.keyWord, params.key)
      .then((res: any) => {
        const pagingKey = {
          'total_count': res.meta.total_count,
          'total_pages': res.meta.total_pages,
          'current_page': res.meta.current_page
        }
        commit(types.PAGING_KEY, pagingKey)
        if (params.key) {
          commit(types.FETCH_ARTICLE_SEARCH_RESULT, state.article_search_result.concat(res.articles))
        } else {
          commit(types.FETCH_ARTICLE_SEARCH_RESULT, res.articles)
        }
        return res
      })
      .catch(err => { throw err })
  },
  initSearchResult: ({ commit, state }: { commit: any, state: any }) => {
    commit(types.FETCH_ARTICLE_SEARCH_RESULT, null)
  },
  fetchRanking: ({ commit, state }: { commit: any, state: any }) => {
    return Ranking.fetchList()
      .then((res: any) => {
        commit(types.FETCH_RANKING, res)
      })
      .catch(err => { throw err })
  },
  fetchGame: ({ commit, state }: { commit: any, state: any }, id: bigint) => {
    // ページ切り替え時に前のデータが一瞬残っているので最初に初期化
    commit(types.FETCH_GAME, null)
    return Games.fetch(id)
      .then((res: any) => {
        commit(types.FETCH_GAME, res)
        return res
      })
      .catch(err => { throw err })
  },
  fetchGames: ({ commit, state }: { commit: any, state: any }, key: any) => {
    return Games.fetchList(key)
      .then((res: any) => {
        const pagingKey = {
          'total_count': res.meta.total_count,
          'total_pages': res.meta.total_pages,
          'current_page': res.meta.current_page
        }
        commit(types.PAGING_KEY, pagingKey)
        if (key) {
          commit(types.FETCH_GAMES, state.games.concat(res.games))
        } else {
          commit(types.FETCH_GAMES, res.games)
        }
      })
      .catch(err => { throw err })
  },
  searcGames: ({ commit, state }: { commit: any, state: any }, params: any) => {
    return Games.search(params.genre, params.kind, params.key)
      .then((res: any) => {
        const pagingKey = {
          'total_count': res.meta.total_count,
          'total_pages': res.meta.total_pages,
          'current_page': res.meta.current_page
        }
        commit(types.PAGING_KEY, pagingKey)
        if (params.key) {
          commit(types.FETCH_GAME_SEARCH_RESULT, state.game_search_result.concat(res.games))
        } else {
          commit(types.FETCH_GAME_SEARCH_RESULT, res.games)
        }
      })
      .catch(err => { throw err })
  }
}
