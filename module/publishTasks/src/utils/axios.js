// import qs from 'qs'
import { Toast } from 'vant'
import axios from 'axios'
// const isProd = process.env.NODE_ENV === 'prod'
axios.defaults.withCredentials = false
axios.defaults.headers.get['X-Ca-Stage'] = 'RELEASE'
axios.defaults.baseURL = window.location.protocol + '//tchapi.diplotalk.unischool.cn'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 设置默认请求头
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  config.timeout = 10000 // 超时设置
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 响应数据
  const res = response.data
  switch (response.status) {
    case 404:
      Toast('未找到内容')
      return
    case 504:
      Toast('请求超时')
      return
    case 500:
      Toast('服务器内部错误')
      return
  }
  // 正常返回数据
  if (response.status === 200) {
    if (res.code === '200') {
      const configData = response.config.data && JSON.parse(response.config.data)
      if (configData && configData.showResponse) {
        return response
      } else if (configData && configData.showMap) {
        return { code: res.code, msg: res.msg, data: res.data }
      } else {
        return res.data
      }
      // return res.data
    } else if (res.code === 'needLogin') {
      console.log('重新登陆')
    } else if (res.code === '1010004') {
      Toast(res.msg)
    } else {
      throw new Error(response)
    }
  }
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
