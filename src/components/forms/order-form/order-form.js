import { getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { db } from '../../../firebase'
import { ProductsState } from '../../context'
import ModalWindow from '../../modal-window'
import Thanks from '../../thanks'
import './order-form.css'

const OrderForm = () => {
  const {firebaseCart} = ProductsState()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [adress, setAdress] = useState("")
  const [active, setActive] = useState(false)

  const auth = getAuth()
  const [user] = useAuthState(auth)

  const onSubmit = async (e) => {
    e.preventDefault()
    setActive(true)
    const date = new Date().toLocaleString()
    const order ={
      name,
      email,
      phone,
      adress,
      products: firebaseCart,
      date: date
    }

    const productRef = doc( db, user?.uid, "order" )

    try {
      await setDoc(productRef, 
      {order: [order]})
      console.log('succesfull')
    } catch(error) {
      console.log(error)
    }

  }

  const cleanCart =async () => {
    const productRefCart = doc( db, user?.uid, "cart" )

    try {
      await setDoc(productRefCart, 
        {products: [] },
        {merge: true})
      console.log('succesfull')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
    <form className='order__form' onSubmit={onSubmit}>
      <div className='order__form__title'>
        <h3>Заполните данные для доставки</h3>
      </div>

      <div className="order__form__group">
        <label className="order__form__label" >Ваше имя<span className='required'>*</span></label>
        <input value={name}  type="text" placeholder=" " className="order__form__input" onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="order__form__group">
        <label className="order__form__label" >Email<span className='required'>*</span></label>
        <input 
          value={email}
          type="email" placeholder=" "
          className="order__form__input"
          onChange={(e) => setEmail(e.target.value)}
          />
      </div>

      <div className="order__form__group">
        <label className="order__form__label" >Телефон<span className='required'>*</span></label>
        <input value={phone}  type="number" placeholder=" " className="order__form__input"
        onChange={(e) => setPhone(e.target.value)}/>
      </div>

      <div className="order__form__group">
        <label className="order__form__label">Адрес<span className='required'>*</span></label>
        <input
          value={adress}
          className="order__form__input"
          type="text" placeholder=" "
          onChange={(e) => setAdress(e.target.value)}/>
      </div>

      <button disabled={false} className="order__form__button">
        Заказать
      </button>

    </form>
    <ModalWindow active = {active} setActive = {setActive}>
        <Thanks name = {name} cleanCart= {cleanCart}/>
    </ModalWindow>
    </>
  )
}

export default OrderForm