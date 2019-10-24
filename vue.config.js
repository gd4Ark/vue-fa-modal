const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  css: { extract: false },
  outputDir: 'docs',
  publicPath: isProd ? './' : '/',
  configureWebpack: {
    entry: './example/main.js',
    output: {
      libraryExport: 'default'
    },
    resolve: {
      // 设置别名
      alias: {
        'vue-fa-modal': path.resolve(__dirname, './')
      }
    }
  }
}
