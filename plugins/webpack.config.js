const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin') // Importamos el plugin
const HtmlWebpackPlugin = require('html-webpack-plugin') // Importamos el plugin

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: ('js/[name].js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', 
          {
            loader: MiniCSSExtractPlugin.loader // Genera el archivo css
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({ // Instancia la clase
      filename: 'css/[name].css' // Le da el nombre al archivo css
    }) ,
    new HtmlWebpackPlugin({
      title: 'Plugins' // Titulo del html
    })
  ]
}