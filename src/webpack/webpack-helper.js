export default  {
  'babel'(option) {
    if (option.hot) {
      return {
        test: /\.jsx?$/,
        loader: 'babel',
        // 即使使用 es3ify, 也无法 transform hmre 里面的 exports.default, 所以无法兼容
        query: {
          "presets": ["react-hmre"]
        },
        exclude: /node_modules/
      };
    } else {
      return {test: /\.jsx?$/, loaders: ['es3ify-loader', 'babel'], exclude: /node_modules/};
    }
  },
  'css-modules'(option) {
    return {
      test: /\.css$/,
      include: option.include,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }
  },
  'css'(option) {
    return {
      test: /\.css$/,
      include: option.include,
      loader: 'style!css!postcss'
    }
  }
};
