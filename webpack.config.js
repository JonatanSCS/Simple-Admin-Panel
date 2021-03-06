const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('./index.html') }),
    new MiniCssExtractPlugin()
  ],
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
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      mocks: path.resolve(__dirname, 'src/mocks/'),
      services: path.resolve(__dirname, 'src/services.js'),
      routes: path.resolve(__dirname, 'src/routes.js')
    }
  }
}
