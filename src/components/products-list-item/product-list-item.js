import React, { memo, useState } from "react";
import {AiFillStar} from 'react-icons/ai'
import './product-list-item.css'
import { doc, setDoc } from "firebase/firestore";
import {db} from '../../firebase'
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { ProductsState } from "../context";
import ModalWindow from '../modal-window'
import ProductInfo from "../product-info";
import ProductBuy from "../product-buy/product-buy";


const ProductListItem = React.memo(({product}) => {

  const {firebaseFavorite} = ProductsState()
  const [active, setActive] = useState(false)
  const auth = getAuth()
  const [ user ] = useAuthState(auth)
  


  const isItemFavotite = firebaseFavorite?.some(item => item.id ===product.id) 
  


  const adToFavorite = async (e) => {
    e.stopPropagation()
    if(isItemFavotite) {
      const productRef = doc(db, user?.uid, "favorites");

        try{
          await setDoc(productRef,
            {items: firebaseFavorite.filter((prod) => prod.id !== product.id ) },
            {merge: true})
            console.log('deleted from faforite')
        } catch(error) {
        console.log(error)
      }
    } else {
      const productRef = doc( db, user?.uid, "favorites" )
    
      try {
        await setDoc(productRef, 
          {items: firebaseFavorite ? [...firebaseFavorite, product] : [product]})
        console.log('succesfull')
      } catch(error) {
        console.log(error)
      }

      }
    
  }

  const starColor = isItemFavotite ? "gold" : "gray"

  return (
    <div className="list__item" >
      <div className="list__item__inner">
      <div className="star__container">
      <AiFillStar className="star__icon" color={starColor} size = {25} onClick={adToFavorite} />
      </div>
        <div className="list__item__img">
          <img src={product.image}/>
        </div>
        <div className="list__item__info">
          <div className="list__item__info__title" onClick={() => setActive(!active)}>
            {product.title}
          </div>
          <ProductBuy product = {product} />
        </div>
      </div>
      <ModalWindow active = {active} setActive = {setActive}>
        <ProductInfo product = {product}/>
      </ModalWindow>
    </div>
  )
})

export default ProductListItem