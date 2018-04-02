var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, '/app/index.js')
  ],
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: 'babel-loader'
      },{
        test: /\.less$/,
        enforce: "pre",
        loaders: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  },
  mode: 'production'
}