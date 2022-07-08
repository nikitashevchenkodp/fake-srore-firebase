import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import './thanks.css'

const Thanks = ({name, cleanCart}) => {
  const history = useHistory()

  const handleClick = () => {
    cleanCart()
    history.push('/')
  }

  return (
    <div className="thanks__page">
      <h3 className="thanks__page__title">Спасибо за Заказ {name} </h3>
      <AiOutlineCheckCircle size = {50} className="thanks__check"/>
      <p className="thanks__page__text">Менеджер Вам перезвонит в течении 3 часов, а пока вы можете вернутся на главную страницу и продолжить покупки</p>
      <button className="order__form__button" onClick={handleClick}>
        На главную страницу
      </button>
    </div>
  )
}

export default Thanks