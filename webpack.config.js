/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (env) => {
  let envConfig;
  env.development
    ? (envConfig = require(`./webpack-build-utils/webpack.development`))
    : (envConfig = require(`./webpack-build-utils/webpack.production`));

  return merge({ mode: env.development ? 'development' : 'production' }, commonConfig, envConfig);
};
