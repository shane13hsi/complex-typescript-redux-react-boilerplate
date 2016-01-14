var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var H = require('./webpack.helper.js');

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
  ]
};
