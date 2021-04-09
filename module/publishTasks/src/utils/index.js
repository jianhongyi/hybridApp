export function getHeight (doms = []) {
  let result = 0
  doms.forEach(item => {
    result += +item.offsetHeight
  })
  return result + 'px'
}
