const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const distPath = __dirname + '/../dist';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: distPath,
    filename: 'bundle.js'
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
      'three/OrbitControls': path.join(__dirname, '../node_modules/three/examples/js/controls/OrbitControls.js')
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
              name: file => {
                return '[path][name].[ext]';
              }
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