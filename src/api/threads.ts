import client from './client'

// local: 'http://localhost:3000/commentators'
// stag: 'https://www.latg.site/commentators'
export default {
  fetch: (id: bigint) => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/api/sc_threads/' + id)
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  fetchList: (type: bigint) => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/api/sc_threads', { params: { type: type } })
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
