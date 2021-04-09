// import qs from 'qs'
import { getQueryVariable } from './util.js'
import { Toast } from 'vant'
import axiosCommon from 'axios'
let axios = axiosCommon.create()
axios.defaults.withCredentials = false
let CancelToken = axiosCommon.CancelToken
const stage = getQueryVariable('stage') // 业务环境变量
// 不同项目文件设置不同请求地址
const DIR_NAME = process.env.DIR_NAME
switch (DIR_NAME) {
  case 'parents':
    // test.english.digtalk.unischool.cn/api/parent-business
    axios.defaults.baseURL = window.location.protocol + '//hwadminapi.diplotalk.unischool.cn/api/parent-business'
    break
  case 'schoolmaster':
    // test.english.digtalk.unischool.cn/api/headmaster-business
    // pre-hwadminapi.diplotalk.unischool.cn/api/headmaster-business
    axios.defaults.baseURL = window.location.protocol + '//hwadminapi.diplotalk.unischool.cn/api/headmaster-business'
    break
  case 'publishTasks':
    axios.defaults.baseURL = window.location.protocol + '//tchapi.diplotalk.unischool.cn'
    break
  default:
    axios.defaults.headers.get['X-Ca-Stage'] = 'RELEASE'
    axios.defaults.baseURL = window.location.protocol + '//stuapi.diplotalk.unischool.cn'
    break
}

if (stage) { // 如果传入了环境变量。说明需要环境重新设置
  axios.defaults.headers.get['X-Ca-Stage'] = stage
}

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 设置默认请求头
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  config.timeout = 10000 // 超时设置
  // 取消请求
  let cancelGroupName
  if (config.method === 'post' || config.method === 'put') {
    if (config.data && config.data.cancelGroupName) { // post请求ajax取消函数配置
      cancelGroupName = config.data.cancelGroupName
    }
  }
  if (config.method === 'get') {
    if (config.params && config.params.cancelGroupName) { // get请求ajax取消函数配置
      cancelGroupName = config.params.cancelGroupName
    }
  }
  if (cancelGroupName) {
    if (axios[cancelGroupName] && axios[cancelGroupName].cancel) {
      axios[cancelGroupName].cancel()
    }
    config.cancelToken = new CancelToken(c => {
      axios[cancelGroupName] = {}
      axios[cancelGroupName].cancel = c
    })
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 正常返回数据
  if (response.status === 200) {
    const res = response.data
    if (res.code === '200') {
      const configData = response.config.data && JSON.parse(response.config.data)
      if (configData && configData.showResponse) {
        return response
      } else if (configData && configData.showMap) {
        return { code: res.code, msg: res.msg, data: res.data }
      } else {
        return res.data
      }
    } else if (res.code === '1506') { // 需要图形验证码
      return res
    } else if (res.code === '1502') { // 图形验证码错误
      Toast(res.msg)
      return res
    } else if (res.code) {
      Toast(res.msg)
      throw new Error(res.msg)
    } else {
      throw new Error(res.msg)
    }
  }
}, error => {
  if (error.toString() === 'Cancel') {
    return Promise.reject(error)
  }
  // 对响应错误做点什么
  switch (error.response && error.response.status) {
    case 400:
      Toast('异常请求')
      break
    case 404:
      Toast('未找到内容')
      break
    case 504:
      Toast('请求超时')
      break
    case 500:
      Toast('服务器内部错误')
      break
    default:
      Toast('请求失败')
      break
  }
  return Promise.reject(error)
})

export default axios
