import React, { useState } from 'react'

import Loader from './loader'

import data from '../../data.json'

import logo from '../images/platzi.png'
import video from '../video/que-es-core.mp4'

import '../less/styles.less'
import '../scss/styles.scss'
import '../stylus/styles.styl'

export default function App() {
  const [loaderList, setLoaderList] = useState([])
  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert')
    alerta('OMG, este módulo ha cargado dinámicamente')
  }
  return (
    <React.Fragment>
      <h1 className="title">
        Que linda aplicación hecha en React.js
      </h1>
      <p className="post-css">esto es postcss</p>
      <p className="scss">esto es sass</p>
      <p className="less">esto es less</p>
      <p className="stylus">esto es stylus</p>
      <img src={logo} alt="logo" />
      <video src={video} controls poster={logo} />
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