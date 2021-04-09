import axios from './axios'
export function post (url, data, error) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res)
    }, err => {
      err = error || err
      this.$toast(err)
    })
  })
}
export function get (url, params, error) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => {
      resolve(res)
    }, err => {
      err = error || err
      this.$toast(err)
    })
  })
}
