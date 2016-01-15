var webpack = require('webpack');
var H = require('./webpack/webpack-helper.js');
var HtmlPlugin = require('./webpack/html-plugin.js');

var path = require('path');

module.exports = {
  devtool: 'eval',

  entry: {
    'app-lietou': './src/apps/lietou/index',
    'app-zhaopin-menhu': './src/apps/zhaopin-menhu/index',
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },

  module: {
    loaders: [
      H['babel'](),
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new HtmlPlugin(),
  ]
};
