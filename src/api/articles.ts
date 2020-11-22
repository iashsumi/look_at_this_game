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
  }
}
