var configure = require('../configure-webpack');
var pkg = require('./package.json');
var config = require('../../../project-config');

module.exports = configure({
  devtool: 'eval',
  entry: './index.jsx',
  outputPath: path.join(config.dist, pkg.name)
});
