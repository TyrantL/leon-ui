/**
 * @author: leon
 * @date: 2020/7/13 4:49 下午
 */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const Components = require('./components.json');

const webpackConfig = {
  mode: 'production',
  entry: Components,
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../packages'),
    },
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
  },
  externals: nodeExternals(),
  performance: {
    hints: false,
  },
  stats: 'none',
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('assert', '[name].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new ProgressBarPlugin(),
  ],
};

module.exports = webpackConfig;
