import React, { useState } from 'react'

import Loader from './loader'

import data from '../../data.json'

export default function App() {
  const [loaderList, setLoaderList] = useState([])
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