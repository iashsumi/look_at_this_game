import client from './client'

// local: 'http://localhost:3000/videos'
// stag: 'https://www.latg.site/videos'
export default {
  fetch: (key: any) => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/videos', { params: { paging_key: key } })
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
