import '../css/styles.css'

import text from './text'

text()

// Activación manual de HMR
if(module.hot) {
  module.hot.accept('./text.js', () => {
    text()
  })
}

