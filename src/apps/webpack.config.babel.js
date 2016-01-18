import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { argv } from 'yargs';

if (argv.app === undefined) {
  throw new Error('请指定应用名称, 格式: npm run build -- --app=<app-name>');
}

const appName = argv.app;

import H from '../webpack/webpack-helper.js';
import projectConfig from '../../project.config';

const isProd = process.env.NODE_ENV === 'production';
const isHot = argv.hot !== undefined;

export default {
  devtool: isProd ? false : 'eval',

  entry: function() {
    const entryPath = path.join(projectConfig.apps, appName, 'index.jsx');
    if (isHot) {
      return [
        'webpack-hot-middleware/client', entryPath
      ];
    } else {
      return entryPath;
    }
  }(),

  output: {
    path: path.join(projectConfig.dist, appName),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      H['babel']({hot: isHot}),
      H['css']({include: path.join(projectConfig.apps, appName, 'styles')}),
      H['css-modules']({
        include: [
          path.join(projectConfig.apps, appName, 'routes'),
          path.join(projectConfig.apps, appName, 'components'),
          path.join(projectConfig.src, 'component-pool')
        ]
      })
    ]
  },

  resolve: {
    alias: {
      'component-pool': path.join(projectConfig.src, 'component-pool')
    },
    extensions: ['', '.js', '.jsx']
  },

  plugins: function() {
    let plugins = [new HtmlWebpackPlugin({
      template: path.join(projectConfig.src, 'templates/__default_desktop.html')
    }),
      new webpack.optimize.OccurenceOrderPlugin()
    ];
    if (isHot) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    if (isProd) {
      plugins.push(new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }));
    }
    return plugins;
  }()
};
