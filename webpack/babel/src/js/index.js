import '../css/styles.css'

import search from './search'
import render from './render'

const id = prompt('¿Quién es ese pókemon?')
search(id)
.then(data => {
  render(data)
})
.catch(() => {
  console.log('error :\'v')
})

