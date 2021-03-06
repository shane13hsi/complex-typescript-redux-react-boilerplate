// TODO: 暂时没有需求写 html-plugin, 本来是想根据 m.index.js 中的 m 关键词自动选择 mobile 模板

var fs = require('fs');
var path = require('path');

function HtmlPlugin(options) {
  this.options = options ? options : {};
}

HtmlPlugin.prototype.apply = function(compiler) {
  var that = this;

  compiler.plugin("emit", function(compilation, callback) {
    that.addFileToWebpackAsset(compilation);
    callback();
  });
};

HtmlPlugin.prototype.addFileToWebpackAsset = function(compilation) {
  var that = this;

  var template = path.join(__dirname, 'default-pc.html');
  var filename = path.resolve(template);
  compilation.fileDependencies.push(filename);

  var outFilename = path.basename(that.options.filename || 'index.html');
  compilation.assets[outFilename] = {
    source: function() {
      return fs.readFileSync(filename).toString();
    },
    size: function() {
      return fs.statSync(filename).size;
    }
  };
};

module.exports = HtmlPlugin;
