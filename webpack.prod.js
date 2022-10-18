const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build/web'),
    filename: 'index.js',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
  },
});
