const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

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
  resolve: {
    alias: {
      'three/OrbitControls': path.join(__dirname, '../node_modules/three/examples/js/controls/OrbitControls.js'),
      'three/LoaderSupport': path.join(__dirname, '../node_modules/three/examples/js/loaders/LoaderSupport.js'),
      'three/OBJLoader2': path.join(__dirname, '../node_modules/three/examples/js/loaders/OBJLoader2.js'),
      'three/MTLLoader': path.join(__dirname, '../node_modules/three/examples/js/loaders/MTLLoader.js'),
    }
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