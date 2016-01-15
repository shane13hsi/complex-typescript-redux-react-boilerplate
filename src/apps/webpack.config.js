var webpack = require('webpack');
var H = require('../webpack/webpack-helper.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var projectConfig = require('../../project-config');

var path = require('path');
var argv = require('yargs').argv;

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProd ? false : 'eval',

  entry: function() {
    return path.join(projectConfig.apps, argv.app, 'index.jsx')
  }(),

  output: {
    path: path.join(projectConfig.dist, argv.app),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      H['babel']()
    ]
  },

  resolve: {
    alias: {
      'components': path.join(projectConfig.src, 'components')
    },
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../templates.'
    })
  ]
};

