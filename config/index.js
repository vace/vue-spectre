// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // assetsPublicPath: '//o4e068rzf.qnssl.com/vue-spectre/',
    productionSourceMap: false
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {}
  }
}
