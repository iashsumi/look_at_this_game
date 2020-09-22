import client from './client'

// local: 'http://localhost:3000/commentators'
// stag: 'https://www.latg.site/commentators'
export default {
  fetch: () => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/api/commentators')
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
