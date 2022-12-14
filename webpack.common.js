const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const scripts = path.resolve(__dirname, 'src');

const webpackConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'api/web'),
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [scripts],
        options: {
            configFile: "tsconfig-web.json"
        }
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        include: [scripts],
      },
      {
        test: /\.(png|jpg|otf|pdf)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/public/images', to: 'images' },
        { from: 'src/index.html', to: '.' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
};

module.exports = webpackConfig;