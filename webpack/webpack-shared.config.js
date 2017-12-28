const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const extraThreeJsModules = require('./three-modules.config');

const devMode = process.env.NODE_ENV === 'development';
console.log(process.env.NODE_ENV)

const aliasThree = Object
  .keys(extraThreeJsModules)
  .reduce((aliases, alias) => {
    const relativeModulePath = extraThreeJsModules[alias];
    aliases[alias] = path.join(
      __dirname, `../node_modules/three/${relativeModulePath}`
    );
    return aliases;
  }, {});

const rootResources = process.env.ROOT_RESOURCES;

const distPath = __dirname + '/../dist';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: process.env.ASSET_PATH || ''
  },
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 9000
  },
  node: {
    fs: 'empty'
  },
  devtool: devMode ? 'cheap-module-eval-source-map' : '',
  resolve: {
    alias: aliasThree
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: rootResources ? '[name].[ext]' : '[path][name].[ext]',
              context: './src',
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(glsl|frag|vert)$/,
        use: [{ loader: 'raw-loader' }, { loader: 'glslify-loader' }],
        exclude: /node_modules/
      },
      {
        test: /\.(obj|mtl)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: rootResources ? '[name].[ext]' : '[path][name].[ext]',
            context: './src',
          }
        }],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: 'three-js-experiment',
      cdnJsThree: true
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      'THREE': 'three'
    })
  ]
};