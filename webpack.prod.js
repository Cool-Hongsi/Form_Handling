const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Separate js and css build files

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    clean: true,
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // 4. Extract css into files
          'css-loader', // 3. Turn css into js
          'postcss-loader', // 2. Convert modern css to vanilla css & Autoprefixer (-webkit, -moz, and -ms) based on .browserslistrc
          'sass-loader', // 1. Turn sass into css
        ],
      },
    ],
  },
});
