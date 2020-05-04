import client from './client'

export default {
  fetch: (key: string) => {
    return new Promise((resolve: any, reject: any) => {
      client.get('http://localhost:3000/videos', { params: { paging_key: key } })
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
