const path = require('path')

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
        use: [ // Los loaders se ejecutan de atras para adelante
          'style-loader', // Inyecta los estilos en el js
          'css-loader' // Interpreta los css
        ] // primero sera el css loader luego el style loader
      }
    ]
  }
}