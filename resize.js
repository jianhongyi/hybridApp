/*
 * @Author: xuemingli
 * @Date: 2019-01-18 11:25:08
 * @Last Modified by: xuemingli
 * @Last Modified time: 2020-08-05 09:08:23
 */
export default function rem (designWidth, maxWidth) {
  var doc = document
  var win = window
  var docEl = doc.documentElement
  var remStyle = document.createElement('style')
  var tid

  function refreshRem () {
    var width = docEl.getBoundingClientRect().width
    maxWidth = maxWidth || 1440
    width > maxWidth && (width = maxWidth)
    var rem = width * 100 / designWidth
    remStyle.innerHTML = 'html{font-size:' + rem + 'px;}'
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle)
  } else {
    var wrap = doc.createElement('div')
    wrap.appendChild(remStyle)
    doc.write(wrap.innerHTML)
    wrap = null
  }
  // 要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem()

  win.addEventListener('resize', function () {
    clearTimeout(tid) // 防止执行两次
    tid = setTimeout(refreshRem, 300)
  }, false)

  win.addEventListener('pageshow', function (e) {
    if (e.persisted) { // 浏览器后退的时候重新计算
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }
  }, false)

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = '16px'
  } else {
    doc.addEventListener('DOMContentLoaded', function (e) {
      doc.body.style.fontSize = '16px'
    }, false)
  }
}
