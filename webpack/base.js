const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const { resolveApp } = require('./utils/paths');

const isNeedBundleAnalyzer = process.env.BUNDLE_ANALYZER || false;

const mode = process.env.NODE_ENV || 'production';
const isProdMode = mode === 'production';
const devServerUrl = `https://localhost:3000/`;

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  mode,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [isProdMode ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@src': resolveApp('src'),
      '@app': resolveApp('src/app'),
      '@widgets': resolveApp('src/widgets'),
      '@features': resolveApp('src/features'),
      '@entities': resolveApp('src/entities'),
      '@shared': resolveApp('src/shared'),
    },
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: isProdMode ? '/' : devServerUrl,
    filename: isProdMode ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: isProdMode ? '[name].[contenthash].js' : '[name].js',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: isProdMode ? '[name].[contenthash].css' : '[name].css',
    }),
    new Dotenv({
      systemvars: true,
    }),
    ...(isNeedBundleAnalyzer ? [new BundleAnalyzerPlugin()] : []),
  ],
};
