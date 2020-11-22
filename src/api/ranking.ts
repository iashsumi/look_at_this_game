import client from './client'

export default {
  fetchList: () => {
    return new Promise((resolve: any, reject: any) => {
      client.get('https://www.latg.site/api/ranking')
        .then((res: any) => resolve(res.data))
        .catch((err: any) => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
