"use strict";

module.exports = {
  'babel': function(option) {
    if (option.hot) {
      return {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          "presets": ["react-hmre"]
        },
        exclude: /node_modules/
      };
    } else {
      return {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/};
    }
  },
  'css-modules': function(option) {
    return {
      test: /\.css$/,
      include: option.include,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }
  },
  'css': function(option) {
    return {
      test: /\.css$/,
      include: option.include,
      loader: 'style!css!postcss'
    }
  }
};
