import path from 'path';
import webpack from 'webpack';
import express from 'express';
import { argv } from 'yargs';
import webpackConfig from '../apps/webpack.config';
import projectConfig from '../../project.config';

if (argv.app === undefined) {
  throw new Error('请指定要编译的应用名称, 如: npm run build -- --app=<app-name>');
}

const appName = argv.app;

const server = express();
const compiler = webpack(webpackConfig);

server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

server.use('/assets', express.static(projectConfig.assets));

server.use(express.static(path.join(projectConfig.dist, appName)));

//server.get('/', function(req, res) {
//  res.sendFile(path.join(__dirname, 'index.html'));
//});

// 动态加入 mock server
require('../apps/' + appName + '/mock')(server);

server.use(require('webpack-hot-middleware')(compiler));

server.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:3000');
});
