/* Need this config here in the root directory.
Even though Webpack is using the same plugins for bundling/transpiling,
Jest also needs to reference it for transpiling during testing. */
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
