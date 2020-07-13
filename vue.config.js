/**
 * @author: leon
 * @date: 2020/7/13 10:58 上午
 */
const path = require('path');
module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'example/index.html',
      filename: 'index.html'
    }
  },
  css: {
    extract: false, // 将css内联，js和css开打包设置为true
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './packages/common/style/common.less')
      ]
    }
  },
  chainWebpack: config => {
    config.externals({
      // 'vue': 'Vue' // 不把vue的源码打包
    })
  }
}
