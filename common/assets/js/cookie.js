/* eslint-disable one-var */
const cookie = {
  /**
   * 设置cookie方法
   * @param   {string}  key  cookie键值
   * @param   {string}  value  cookie对应的键值内容
   * @param   {Boolean}  type  cookie设置是否跨域
   */
  setCookie (key, value, type) {
    var exdate = new Date(),
      expiredays = 365
    exdate.setDate(exdate.getDate() + expiredays)
    // 判断是否需要跨域存储
    if (type) {
      document.cookie = key + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=/;domain=uni.com'
    } else {
      document.cookie = key + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=/'
    }
  },
  /**
   * 获取cookie方法
   * @param   {string}  name  cookie键值
   * @return  {*}  返回cookie值
   */
  getCookie (name) {
    if (document.cookie.length > 0) {
      var start = document.cookie.indexOf(name + '=')
      if (start !== -1) {
        start = start + name.length + 1
        var end = document.cookie.indexOf(';', start)
        if (end === -1) {
          end = document.cookie.length
        }
        return unescape(document.cookie.substring(start, end))
      }
    }
    return ''
  },
  /**
   * 删除cookie方法
   * @param   {string}   key  cookie键值
   * @param  {Boolean}  type  cookie设置是否跨域
   */
  delCookie (key, type) {
    var _this = this
    var del = new Promise(function (resolve, reject) {
      var exdate = new Date(),
        expiredays = -1
      exdate.setDate(exdate.getDate() + expiredays)
      var value = _this.getCookie(key)
      if (value) {
        // 判断是否跨域
        if (type) {
          document.cookie = key + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=/;domain=uni.com'
        } else {
          document.cookie = key + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + ';path=/'
        }
      }
      resolve()
    })
    return del
  }
}

export default cookie
