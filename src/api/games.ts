import client from './client'

export default {
  fetch: (id: bigint) => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/api/games/' + id)
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  fetchList: (key: any) => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/api/games', { params: { page: key } })
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  search: (genre: string, kind: string, key: any) => {
    return new Promise((resolve: any, reject: any) => {
      client.post('https://www.latg.site/api/games/search', { page: key, genre: genre, kind: kind })
        .then((res: any) => {
          resolve(res.data)
        })
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
