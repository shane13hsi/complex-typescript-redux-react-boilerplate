var webpack = require('webpack');
var H = require('../webpack/webpack-helper.js');
var HtmlPlugin = require('../webpack/html-plugin.js');

var path = require('path');

/**
 * @param devtool
 * @param entry
 * @param outputPath
 *
 * */
module.exports = function(options) {
  var config = {
    devtool: options.devtool,

    entry: function() {
      return options.entry
    },

    output: function() {
      return {
        path: options.outputPath,
        filename: '[name].js',
      }
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

  return config;
};
