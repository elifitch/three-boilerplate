const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const distPath = __dirname + '/../dist';

module.exports = {
  externals: {
    'three': 'THREE'
  },
  entry: {
    app: './src/js/index.js'
  },
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
        use: [{loader: 'raw-loader'}, {loader: 'glslify-loader'}],
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
    new ExtractTextPlugin("styles.css")
  ]
};
