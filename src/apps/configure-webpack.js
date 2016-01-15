var webpack = require('webpack');
var H = require('../webpack/webpack-helper.js');
var HtmlPlugin = require('../webpack/html-plugin.js');
var projectConfig = require('../../project-config');

var path = require('path');

/**
 * @param devtool
 * @param entry
 * @param outputPath
 * @param filename
 *
 * */
module.exports = function(options) {
  var config = {
    devtool: options.devtool,

    entry: function() {
      return options.entry
    }(),

    output: function() {
      return {
        path: options.outputPath,
        filename: options.filename
      }
    }(),

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
      new HtmlPlugin()
    ]
  };

  return config;
};
