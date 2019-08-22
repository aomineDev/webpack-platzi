import React, { useState } from 'react'
import data from '../../data.json'

import Loader from './loader'

export default function App() {
  const [loaderList, setLoaderList] = useState([])
  const arr = [1, 2, 3]
  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <React.Fragment>
      <h1 className="title">
        Que linda aplicación hecha en React.js
      </h1>
      <ul>
        {
          loaderList.map(e => 
            <Loader {...e} key={e.id} />
          )
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </React.Fragment>
  )  
}