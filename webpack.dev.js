const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    clean: true,
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true, // 404 Page will fallback to index.html
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', // 4. Inject styles into dom
          'css-loader', // 3. Turn css into js
          'postcss-loader', // 2. Convert modern css to vanilla css & Autoprefixer (-webkit, -moz, and -ms) based on .browserslistrc
          'sass-loader', // 1. Turn sass into css
        ],
      },
    ],
  },
});
