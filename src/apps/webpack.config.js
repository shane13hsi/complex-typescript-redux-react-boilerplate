var webpack = require('webpack');
var H = require('../webpack/webpack-helper.js');
var HtmlPlugin = require('../webpack/html-plugin.js');
var projectConfig = require('../../project-config');

var path = require('path');
var argv = require('yargs').argv;

var isProd = process.env.NODE_ENV === 'production';
var isHot = argv.hot !== undefined;

module.exports = {
  devtool: isProd ? false : 'eval',

  entry: function() {
    var entryPath = path.join(projectConfig.apps, argv.app, 'index.jsx');
    if (isHot) {
      return [
        'webpack-hot-middleware/client', entryPath
      ];
    } else {
      return entryPath;
    }
  }(),

  output: {
    path: path.join(projectConfig.dist, argv.app),
    filename: 'bundle.js',
    publicPath: '/static'
  },

  module: {
    loaders: [
      H['babel']({hot: isHot})
    ]
  },

  resolve: {
    alias: {
      'components': path.join(projectConfig.src, 'components')
    },
    extensions: ['', '.js', '.jsx']
  },

  plugins: function() {
    if (isHot) {
      return [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin()
      ]
    } else {
      return [new HtmlPlugin()];
    }
  }()
};
