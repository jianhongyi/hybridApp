
const check = {
  phone (val) {
    if (val.length === 8 && /^[0-9]+.?[0-9]*$/.test(val)) {
      return {
        stat: 1,
        tip: ''
      }
    }
    let isPhone = /^(13|14|15|16|17|18|19)[0-9]{9}$/.test(val) ? 1 : 0
    if (isPhone === 1) {
      return {
        stat: 1,
        tip: ''
      }
    }
    let is11 = /^\d{11}$/.test(val) ? 1 : 0  // 11位
    return is11 === 1 ? {
      stat: 0,
      tip: '不支持该手机号号段'
    } : {
      stat: 0,
      tip: '请输入正确的手机号'
    }
  },
  imgCode (val) {
    return /^[0-9a-z]{4}$/i.test(val) && val ? {
      stat: 1,
      tip: ''
    } : {
      stat: 0,
      tip: '请输入4位验证码'
    }
  },
  password (val) {
    let res = {
      stat: 0,
      tip: ''
    }
    if (val.length < 6) {
      res.tip = '密码不能少于6位字符'
    } else {
      res.stat = 1
      let level = 0
      if (/[0-9]/g.test(val)) {
        level++
      }
      if (/[a-z]/ig.test(val)) {
        level++
      }
      if (/[^\w]/g.test(val)) {
        level++
      }
      switch (level) {
        case 1:
          res.tip = '安全等级：低'
          break
        case 2:
          res.tip = '安全等级：中'
          break
        case 3:
          res.tip = '安全等级：高'
          break
      }
    }
    return res
  },
  name (val) {  // 匹配中英文
    let res = {
      stat: 1,
      tip: '',
      length: 0,
      index: val.split('').length
    }
    val.split('').map((x, i) => {
      res.length += /[\u4e00-\u9fa5]/.test(x) ? 2 : 1
      if (res.length > 10 && i < res.index) {
        res.index = i
      }
    })
    if (!/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(val)) {
      res.stat = 0
      res.tip = '只能输入中英文和数字'
    }
    if (res.length === 0) {
      res.tip = ''
    }
    return res
  }
}

export default check
