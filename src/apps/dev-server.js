var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var projectConfig = require('../../project-config');

var app = express();
var compiler = webpack(config);

var argv = require('yargs').argv;

if (argv.app === undefined) {
  throw new Error('请指定要编译的应用名称, 如: npm run build -- --app=<app-name>');
}

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/assets', express.static(projectConfig.assets));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

require('./' + argv.app + '/mock')(app);

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:3000');
});
