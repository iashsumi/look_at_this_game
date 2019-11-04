import client from './client'

export default {
  fetch: () => {
    return new Promise((resolve: any, reject: any) => {
      client.get('http://localhost:3000/games')
        .then((res: any) => resolve({ games: res.data }))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  show: () => {
    return new Promise((resolve: any, reject: any) => {
      client.get('http://localhost:3000/game')
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
