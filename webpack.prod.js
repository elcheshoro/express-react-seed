const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

const scripts = path.resolve(__dirname, 'src');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [scripts],
      },
    ],
  },
});
