// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// Format(time, "yyyy-MM-dd hh:mm:ss.S") ==> 2018-1-02 08:09:04.423
// Format(time, "yyyy-M-d h:m:s.S")      ==> 2018-1-2 8:9:4.18
const timeFormat = function (time, fmt) {
  var o = {
    'M+': time.getMonth() + 1, // 月份
    'd+': time.getDate(), // 日
    'h+': time.getHours(), // 小时
    'm+': time.getMinutes(), // 分
    's+': time.getSeconds(), // 秒
    'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
    'S': time.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

// 断网检测
const offline = function (onlineCallback, offlineCallback) {
  var el = document.body
  if (el.addEventListener) {
    window.addEventListener('online', onlineCallback, true)
    window.addEventListener('offline', offlineCallback, true)
  } else if (el.attachEvent) {
    window.attachEvent('ononline', onlineCallback)
    window.attachEvent('onoffline', offlineCallback)
  } else {
    window.ononline = onlineCallback
    window.onoffline = offlineCallback
  }
}
// 获取URL上参数
const getQueryVariable = function (variable) {
  var query = window.location.hash.split('?')[1]
  if (!query) return
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] === variable) { return pair[1] }
  }
  return ''
}
export { timeFormat, offline, getQueryVariable }
