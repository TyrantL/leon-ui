/**
 * @author: leon
 * @date: 2020/7/14 5:05 下午
 */
const path = require('path');
module.exports = {
  stories: ['./stories/**.[tj]s'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../packages')
    })
    return config;
  }
}
