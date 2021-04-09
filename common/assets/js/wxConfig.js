/* eslint-disable no-undef */
'use strict'
import axios from './axios.js'
window.wx = require('weixin-js-sdk')
export default class WxConfig {
  constructor (parmas = {}) {
    this.parmas = parmas  // 分享初始定义参数
    this.jsapiconf = this.parmas.jsapiconf || '/signature'  // 获取微信配置接口
    this.jsApiList = this.parmas.jsApiList || ['hideMenuItems', 'getNetworkType', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'updateAppMessageShareData', 'updateTimelineShareData', 'chooseWXPay']   // 需要使用的微信 JS接口列表
    this.shareClient = 0   // 网页当前所处的环境  1、微信、2、原生app、0、其他浏览器
    this.wxUpdateStatus = false  // 当前微信客户端是否支持最新分享api
    this.init()
  }
  /**
   * 初始化变量参数
   */
  init () {
    let _isWeChat = this.isWeChat()
    let _this = this
    if (typeof wx !== 'undefined' && _isWeChat) {
      this.shareClient = 1
      let params = {
        link: location.href.split('#')[0]
      }
      axios.get(this.jsapiconf, { params }).then((config) => {
        if (config) {
          wx.config({
            debug: false,                  // 开启调试模式
            appId: config.app_id ? config.app_id : 'wx89f2301d41684133', // 必填，公众号的唯一标识
            timestamp: config.timestamp,   // 必填，生成签名的时间戳
            nonceStr: config.noncestr,     // 必填，生成签名的随机串
            signature: config.signature,   // 必填，签名
            jsApiList: _this.jsApiList     // 必填，需要使用的JS接口列表
          })
          // 判断当前客户端版本是否支持指定JS接口
          wx.checkJsApi({
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 需要检测的JS接口列表
            success: function (res) { // 以键值对的形式返回，可用的api值true，不可用为false
              let result = {}
              try {
                result = JSON.parse(res.checkResult)
              } catch (err) {
                result = res.checkResult
              }
              if (result.updateAppMessageShareData && result.updateTimelineShareData) {
                _this.wxUpdateStatus = true
              }
            }
          })
        }
      })
      // config信息验证失败会执行error函数。
      wx.error(function (res) {
        console.log(res, '微信sdk初始化配置错误')
      })
    }
    return this
  }
  /**
   * 获取网页当前所处的环境  1、微信、2、原生app、0、其他浏览器
   */
  getClient () {
    if (typeof xesApp !== 'undefined') {
      this.shareClient = 2
    }
  }
  /**
   * 判断是否是微信浏览器打开
   */
  isWeChat () {
    let _ua = navigator.userAgent.toLowerCase()
    return _ua.match(/MicroMessenger/i) && _ua.match(/MicroMessenger/i)[0] === 'micromessenger'
  }
  /**
   * 调起分享链接模式
   * @param {*} parmas      分享的参数
   * @param {*} successFun  分享成功的回调方法
   * @param {*} cancelFun   分享失败的回调方法
   */
  shareLink (parmas = {}, successFun, cancelFun) {
    // 微信浏览器环境分享
    if (this.shareClient === 1) {
      let _this = this
      wx.ready(function () {
        let wxShareConfig = {
          title: parmas.title || document.title, // 分享标题
          desc: parmas.desc || '',  // 分享描述
          link: parmas.link || location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: parmas.imgUrl || '' // 分享图标
        }
        // 分享到朋友圈及空间的配置数据
        let wxShareLineConfig = Object.assign({}, wxShareConfig, {title: wxShareConfig.title + '--' + wxShareConfig.desc})
        if (!_this.wxUpdateStatus) {
          // 用户点击了分享后执行的回调函数
          wxShareConfig.success = function (res) {
            typeof successFun === 'function' && successFun(res)
          }
          // 用户取消分享后执行的回调函数
          wxShareConfig.cancel = function (res) {
            typeof cancelFun === 'function' && cancelFun(res)
          }
          wx.onMenuShareTimeline(wxShareLineConfig) // 分享给到朋友圈
          wx.onMenuShareAppMessage(wxShareConfig) // 分享给朋友
          wx.onMenuShareQQ(wxShareConfig) // 分享到QQ
          wx.onMenuShareQZone(wxShareLineConfig) // 分享QQ空间
          wx.onMenuShareWeibo(wxShareConfig) // 分享到微博
        } else {
          wx.updateAppMessageShareData(wxShareConfig, function (res) {
            typeof successFun === 'function' && successFun(res)
          })
          wx.updateTimelineShareData(wxShareLineConfig, function (res) {
            typeof successFun === 'function' && successFun(res)
          })
        }
      })
    } else {
      console.log('当前浏览器不支持分享，请在微信里面打开')
    }
  }
  /**
   * 隐藏微信右上角的分享按钮
   * 隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
   */
  shareHide (parmasArr = []) {
    if (this.shareClient === 1) {
      let _menuList = ['menuItem:share:timeline', 'menuItem:copyUrl', 'menuItem:share:appMessage', 'menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:favorite', 'menuItem:share:facebook', 'menuItem:share:QZone', 'menuItem:editTag', 'menuItem:delete', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:readMode', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email', 'menuItem:share:brand']
      _menuList = [...new Set(_menuList.concat(parmasArr))]
      wx.ready(function () {
        wx.hideMenuItems({
          menuList: _menuList
        })
      })
    }
  }
  /**
   * 获取网络状态接口
   * @return {*} 返回网络类型 2g，3g，4g，wifi
   */
  getNetworkType () {
    if (this.shareClient === 1) {
      return new Promise((resolve, reject) => {
        wx.ready(function () {
          wx.getNetworkType({
            success: function (res) {
              resolve(res)
            }
          })
        })
      })
    }
  }
}
