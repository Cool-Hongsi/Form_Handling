const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Create html file in output directory with importing tags (building files)
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); // To configure tsconfig.json file in webpack
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// Env file path configuration
let envPath = `./.env.${process.env.NODE_ENV}`;

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|woff(2)?|ttf|otf|eot|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './resource',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './public/index.html'),
      favicon: 'src/resource/asset/favicon.ico',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new Dotenv({ path: envPath }),
  ],
};
