import React, { useState } from 'react'
import FirstPopap from '../FirstPopap/FirstPopap'
import style from './Main.module.scss'

function Main() {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className={style.container}>
      <button onClick={() => setModalActive(true)} className={style.button}>Налоговый вычет</button>
      <FirstPopap modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  )
}

export default Main
