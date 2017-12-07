const sharedConfig = require('./webpack-shared.config');

const newRules = sharedConfig.module.rules.concat([
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [require('@babel/plugin-proposal-object-rest-spread')]
        }
      }
    ]
  }
]);

module.exports = Object.assign(sharedConfig, {
  module: { rules: newRules }
});
