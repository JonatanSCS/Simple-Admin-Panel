const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.svg$/, use: ['svg-url-loader'] },
      { test: /\.(png|jpe?g|gif)$/i, use: ['file-loader'] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
}
