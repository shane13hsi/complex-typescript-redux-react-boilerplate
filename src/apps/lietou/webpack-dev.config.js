var configure = require('../configure-webpack');
var pkg = require('./package.json');
var projectConfig = require('../../../project-config');
var path = require('path');

module.exports = configure({
  devtool: 'eval',
  entry: path.join(projectConfig.apps, pkg.name, pkg.main),
  outputPath: path.join(projectConfig.dist, pkg.name),
  filename: 'bundle.js'
});
