import { getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { db } from '../../firebase'
import { ProductsState } from '../context'
import './product-buy.css'

const ProductBuy = ({product}) => {
  const {firebaseCart} = ProductsState()
  const isItemInCart = firebaseCart?.some(item => item.id ===product.id) 
  const auth = getAuth()
  const [ user ] = useAuthState(auth)

  const delFromCart = async (e) => {
    e.stopPropagation()
    const productRef = doc(db, user?.uid, "cart");

    try {
      await setDoc(productRef,
        {products: firebaseCart.filter((prod) => prod.id !== product.id ) },
        {merge: true})
        console.log('deleted from cart')
    } catch(error) {
     console.log(error)
    }
  } 



  const onAddToCart = async (e) => {
    e.stopPropagation()
    const productRef = doc( db, user?.uid, "cart" )
    const newProduct = {
      ...product,
      quantity: 1
    }

    try {
      await setDoc(productRef, 
        {products: firebaseCart ? [...firebaseCart, newProduct] : [newProduct]})
      console.log('succesfull')
    } catch(error) {
      console.log(error)
    }

  }

  const btnInner = isItemInCart ? "Del from Cart" : "Add to Cart"

  return (
    <div className="list__item__info__tocart">
      <span className="list__item__info__price">$ {product.price}</span>
      <button className="list__item__info__btn" onClick={isItemInCart ? delFromCart : onAddToCart}>
        {btnInner}
      </button>
    </div>
    )
}

export default ProductBuy