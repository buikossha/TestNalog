import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentValueAction } from '../../redux/actions/currentValueAction'
import SecondPopap from '../SecondPopap/SecondPopap'
import style from './FirstPopap.module.scss'

function FirstPopap({ modalActive, setModalActive }) {

  const [active, setActive] = useState(false)

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(getCurrentValueAction(value))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={modalActive ? `${style.modal} ${style.active}` : style.modal} >
          <div className={style.modal_content} onClick={e => e.stopPropagation()}>
            <h3 className={style.title}>Налоговый вычет</h3>
            <button className={style.close} onClick={() => setModalActive(false)}></button>
            <p className={style.description}>Используйте налоговый вычет чтобы погасить ипотеку досрочно. <br /> Размер налогового вычета составляет не более 13% от своего <br /> официального годового дохода.</p>
            <p className={style.suptitle}>Ваша зарплата в месяц</p>
            <input type="text" placeholder="Введите данные" className={style.salary__input} name="value" onChange={handleChange} />
            <button type="submit" onClick={() => setActive(true)} className={style.second__suptitle}>Рассчитать</button>
            <p className={style.third__suptitle}>Что уменьшаем?</p>
            <button className={style.red__button}>Платёж</button>
            <button className={style.grey__button}>Срок</button>
            <button className={style.add__button}>Добавить</button>
          </div>
        </div >
      </form>
      <SecondPopap active={active} setActive={setActive} />
    </>
  )
}

export default FirstPopap
