import moment from 'moment'
/**
 *
 *
 * @param {*} num 可转化为数字的金额
 * @param {*} type 是否需要带符号 默认带符号
 * @return {string} 格式化后的金额显示，超过100万后显示格式num+w, 否则会按照3位一分格如：12,231,123
 */
export const formartNum = (num, type) => {
  if (isNaN(Number(num))) return ''
  let number = Number(num)
  let reslut = number >= 0 ? '+' : '-'
  if (type) {
    reslut = ''
  }
  if (number < 0) {
    number = number * -1
  }
  if (number >= 1000000) { // 大于100万就显示100w
    reslut += (number / 10000).toFixed(1) + 'w'
  } else {
    reslut += (number.toString()).replace(/\d(?=(?:\d{3})+\b)/g, '$&,')
  }
  return reslut
}

 /**
 * 获取时间段工具函数
 *
 * @param {string} type 0一周， 1一月， 2一年, 默认一周
 * @param {string} [format='YYYY-MM-DD'] 时间格式化格式，见http://momentjs.cn/docs/
 * @return {Object} {startTime,endTime} 返回开始时间和结束时间。结束时间统一为当前时间，开始时间往前推
 */
export const getTimeSlot = (type, format = 'YYYY-MM-DD') => {
  let startTime = ''
  let endTime = moment().subtract(1, 'day').format(format)
  switch (`${type}`) {
    case '0' : startTime = moment().subtract(1, 'week').format(format); break
    case '1' : startTime = moment().subtract(1, 'month').format(format); break
    case '2' : startTime = moment().subtract(1, 'year').format(format); break
    default:
      startTime = moment().subtract(1, 'week').format(format)
  }
  return {
    startTime,
    endTime
  }
}
/**
 * 格式化显示数据。保留小数点后两位
 * @param {Number} 待格式化数据
 * @return {Number} 保留小数点后2位数据
 */
export const toFixed = (num) => {
  if (isNaN(Number(num))) return ''
  return Number(Number(num).toFixed(2))
}
