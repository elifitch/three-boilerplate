const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const distPath = __dirname + '/../dist';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path:  distPath,
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: file => {
                return '[path][name]-[hash].[ext]';
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
        use: [{loader: 'raw-loader'}, {loader: 'glslify-loader'}],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: 'three-js-experiment'
    }),
    new ExtractTextPlugin("styles.css")
  ]
};
