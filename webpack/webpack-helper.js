module.exports = {
  'babel': function() {
    return {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/};
  },
  'css-modules': function(config) {
    return {
      test: /\.css$/,
      include: config.include,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }
  },
  'css': function(config) {
    return {
      test: /\.css$/,
      include: config.include,
      loader: 'style!css!postcss'
    }
  }
};
