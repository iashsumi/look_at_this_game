import client from './client'

export default {
  fetch: (id: bigint) => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/api/articles/' + id)
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  fetchList: (key: any) => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/api/articles', { params: { page: key } })
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  search: (keyWord: string, key: any) => {
    return new Promise((resolve: any, reject: any) => {
      client.post('https://www.latg.site/api/articles/search', { page: key, key_word: keyWord })
        .then((res: any) => {
          console.log(res.data)
          resolve(res.data)
        })
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
