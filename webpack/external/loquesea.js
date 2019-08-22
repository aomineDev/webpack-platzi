const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'), // ruta exacta del proyecto y nombre del js a usar
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // ruta exacta y nombre de la carpeta contenedora
    filename: 'bundle.js'
  }
}