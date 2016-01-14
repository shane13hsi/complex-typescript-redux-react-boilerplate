var webpack = require('webpack');
var H = require('./webpack/webpack-helper.js');
var HtmlPlugin = require('./webpack/html-plugin.js');

var path = require('path');

module.exports = {
  devtool: 'eval',

  entry: ['./src/index.jsx'],

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },

  module: {
    loaders: [
      H['babel']()
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlPlugin()
  ]
};
