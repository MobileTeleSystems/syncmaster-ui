const { merge } = require('webpack-merge');

const baseConfig = require('./webpack/base');
const devConfig = require('./webpack/dev');
const prodConfig = require('./webpack/prod');

const isProd = process.env.NODE_ENV === 'production';

module.exports = isProd ? merge(baseConfig, prodConfig()) : merge(baseConfig, devConfig());
