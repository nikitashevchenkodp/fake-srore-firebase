import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineCloseCircle} from 'react-icons/ai'
import { db } from "../../firebase";
import { ProductsState } from "../context";
import './cart-item.css'

const CartItem = ({product}) => {
  const {firebaseCart} = ProductsState()
  const auth = getAuth()
  const [ user ] = useAuthState(auth)

  
  const totalItemPrice = (product.price * product.quantity).toFixed(2)

  const onDecOrInc = async (count) => {
    const newProduct = {
      ...product,
      quantity: count
    }
    const productRef = doc(db, user?.uid, "cart");
    const idx = firebaseCart.findIndex((prod) => prod.id === newProduct.id)
    const item = firebaseCart[idx]
    const newItem = {
      ...item,
      quantity: item.quantity + newProduct.quantity
    }
    let newCart = []
    if(newItem.quantity < 1) {
       newCart = [
        ...firebaseCart.slice(0, idx),
        ...firebaseCart.slice(idx + 1)
      ]
    } else {
       newCart = [
        ...firebaseCart.slice(0, idx),
        newItem,
        ...firebaseCart.slice(idx+1)
      ]
    }
   
    
    await setDoc(productRef, {
      products: newCart
    }, { merge: true });
  }

  const removeItem = async () => {
    const productRef = doc(db, user?.uid, "cart");

    try{
      await setDoc(productRef,
        {products: firebaseCart.filter((prod) => prod.id !== product.id ) },
        {merge: true})
        console.log('deleted from cart')
    } catch(error) {
     console.log(error)
    }
  }

  return(
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={product.image} />
      </div>
      <div className="cart__item__title">
        <h3>{product.title}</h3>
      </div>
      <div className="cart__item__counter">
        <span><AiOutlineMinusCircle className="cart__item__counter__icon" onClick = {() => onDecOrInc(-1)} size={20}/></span>
        <span>{product.quantity}</span>
        <span><AiOutlinePlusCircle className="cart__item__counter__icon" onClick = {() =>onDecOrInc(1)} size={20}/></span>
      </div>
      <div className="cart__item__price">
        <AiOutlineCloseCircle  size={20} 
          className="cart__item__delete__icon"
          onClick={() => removeItem()} />
        <span>$ {totalItemPrice}</span>
      </div>
    </div>
  )
}

export default CartItem