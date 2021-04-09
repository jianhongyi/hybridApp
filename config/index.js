
'use strict'
const path = require('path')
const dirArr = path.dirname(__dirname).split(path.sep)
let proxyTable = require('../proxy.json')
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/' + process.argv[2] + '/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/' + process.argv[2]),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    host: 'localhost',
    env: require('./dev.env'),
    index: process.argv[2],
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: proxyTable,
    cssSourceMap: true
  }
}
