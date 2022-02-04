import React, { useState } from 'react'
import style from './SecondPopap.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentValueAction } from '../../redux/actions/currentValueAction'

function SecondPopap({ active, setActive }) {

  const dispatch = useDispatch()

  const value = useSelector(state => state.currentValue)

  const nalog = ((value * 12) * 0.13).toFixed(0);

  const [newValue, setNewValue] = useState('')

  const handleClick = () => {
    dispatch(getCurrentValueAction(newValue))
  }

  const handleChange = (e) => {
    setNewValue(e.target.value)
  }

  return (
    <>
        <div className={active ? `${style.modal} ${style.active}` : style.modal} >
          <div className={style.modal_content} onClick={e => e.stopPropagation()}>
            <h3 className={style.title}>Налоговый вычет</h3>
            <button className={style.close} onClick={() => setActive(false)}></button>
            <p className={style.description}>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
            <p className={style.suptitle}>Ваша зарплата в месяц</p>
            <input type="text" className={style.salary__input} defaultValue={value} onChange={handleChange} />
            <button className={style.second__suptitle} onClick={handleClick}>Рассчитать</button>
            <p className={style.third__suptitle}>Итого можете внести в качестве досрочных:</p>

            <div className={style.nalog__section}>
              <label className={style.firstcheck}>
                <input type="checkbox" className={style.real_checkbox} />
                <span className={style.custom_checkbox}></span>
              </label>
              <p>{nalog} рублей <span>в 1-ый год</span> </p>
            </div>

            <div className={style.nalog__section}>
              <label className={style.firstcheck}>
                <input type="checkbox" className={style.real_checkbox} />
                <span className={style.custom_checkbox}></span>
              </label>
              <p>{nalog} рублей <span>во 2-ой год</span> </p>
            </div>

            <div className={style.nalog__section}>
              <label className={style.firstcheck}>
                <input type="checkbox" className={style.real_checkbox} />
                <span className={style.custom_checkbox}></span>
              </label>
              <p>{nalog} рублей <span>в 3-ий год</span> </p>
            </div>

            <div className={style.nalog__section}>
              <label className={style.firstcheck}>
                <input type="checkbox" className={style.real_checkbox} />
                <span className={style.custom_checkbox}></span>
              </label>
              <p>{(nalog / 3).toFixed(0)} рублей <span>в 4-ый год</span> </p>
            </div>

            <p className={style.fifth__suptitle}>Что уменьшаем?</p>
            <button className={style.red__button}>Платёж</button>
            <button className={style.grey__button}>Срок</button>
            <button className={style.add__button}>Добавить</button>
          </div>
        </div>
    </>
  )
}

export default SecondPopap
