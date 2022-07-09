import React, { useState } from "react";
import CartItem from "../../cart-item/cart-item";
import { ProductsState } from "../../context";
import OrderForm from "../../forms/order-form";
import './cart-page.css'

const CartPage = () => {

  const [isConfirm, setConfirm] = useState(false)

  const {firebaseCart} = ProductsState()
  const calcTotalPrice = (firebaseCart) => firebaseCart.reduce((start,product) => start += product.price * product.quantity, 0)
  const count = firebaseCart.reduce((start,item) => start += item.quantity, 0)

 
  const cartItems = firebaseCart.map((product) => {
    return (
      <CartItem key={product.id} product = {product} />
    )
  })

  const inner = firebaseCart.length > 0 ? cartItems : "Your cart is empty..Lets add something!"
  const confirm = firebaseCart.length > 0 ? <button className="confirm__order" onClick={() => setConfirm(!isConfirm)}>Place an order</button> : null
  return (
    <div className="cart__page">
      {inner}
      <div className="cart__page__total">
        <span className="cart__page__total__text">{count} items on</span>
        <span className="cart__page__total__price">$ {calcTotalPrice(firebaseCart).toFixed(2)}</span>
        {confirm}
      </div>
      {isConfirm && firebaseCart.length > 0  ? <OrderForm /> : null}
    </div>
  )
}

export default CartPage