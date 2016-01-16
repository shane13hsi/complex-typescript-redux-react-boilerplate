var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var projectConfig = require('../../project-config');

var server = express();
var compiler = webpack(config);

var argv = require('yargs').argv;

if (argv.app === undefined) {
  throw new Error('请指定要编译的应用名称, 如: npm run build -- --app=<app-name>');
}

var appName = argv.app;

server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

server.use('/assets', express.static(projectConfig.assets));

server.use(express.static(path.join(projectConfig.dist, appName)));

//server.get('/', function(req, res) {
//  res.sendFile(path.join(__dirname, 'index.html'));
//});

require('./' + appName + '/mock')(server);

server.use(require('webpack-hot-middleware')(compiler));

server.listen(3000, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:3000');
});
