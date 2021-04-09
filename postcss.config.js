// https://github.com/michael-ciniawsky/postcss-load-config

const DIR_NAME = JSON.parse(process.env.npm_config_argv).remain[0]
let rootValue = 37.5
switch (DIR_NAME) {
  case 'publishTasks':
    rootValue = 18.75
    break
  case 'schoolmaster':
    rootValue = 18.75
    break
  default:
    rootValue = 37.5
    break
}
module.exports = {
  'plugins': {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: rootValue,
      unitPrecision: 5, // 最小精度，小数点位数
      minPixelValue: 4,
      propList: ['*', '!border*'], // !不匹配属性（这里是字体相关属性不转换）
      selectorBlackList: [],
      mediaQuery: false
    }
  }
}
