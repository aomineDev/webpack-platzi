// npm run build:dev -- -w

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') // Importaction de webpack

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: ('js/[name].js')
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WebPack-Dev-Server' 
    }),
    new webpack.HotModuleReplacementPlugin() // Instancia de webpack
  ]
}