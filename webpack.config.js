const path = require('path') // modulo path que viene por defecto

module.exports = {
  entry: './index.js', // Archivo a usar
  // mode: 'development', // modo del proyecto
  output: {
    path: path.resolve(__dirname),  // ruta exacta del proyecto
    filename: 'bundle.js' // nombre del archivo resultante
  }
}