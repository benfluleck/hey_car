/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (env) => {
  const mode = env.development ? 'development' : 'production';
  let envConfig;
  env.development
    ? (envConfig = require(`./webpack-build-utils/webpack.development`))
    : (envConfig = require(`./webpack-build-utils/webpack.production`));

  return merge({ mode }, commonConfig(mode), envConfig);
};
