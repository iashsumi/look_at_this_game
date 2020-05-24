import client from './client'

// local: 'http://localhost:3000/players'
// stag: 'https://www.latg.site/players'
export default {
  fetch: () => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/players')
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
