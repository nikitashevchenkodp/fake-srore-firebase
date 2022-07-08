import React, { useState } from "react";
import {BiUserCircle} from 'react-icons/bi'
import {BsCart3} from 'react-icons/bs'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ProductsState } from "../context";
import UserMenu from "../user-menu";
import './user-block.css'

const UserBlock = ({user}) => {
  const {firebaseCart} = ProductsState()

  const history = useHistory()

  const [visible, setVisible] = useState(false)
  const userMenu = visible ? <UserMenu /> : null
  const count = firebaseCart.reduce((acc,item) => acc += item.quantity, 0)

  return (
      <div className="user__block">
        <div className= "cart__block">
          <BsCart3 size = {25} className= "cart__block__icon" onClick = {() => history.push('/cart')} />
          <div className="cart__block__count">{count}</div>
        </div>
        <div className="user__menu__block" onClick = {() => setVisible(!visible)}>
          <BiUserCircle size = {25}   />
          <span className = "user__menu__block--email">{user.email}</span>
          {userMenu}
        </div>
        
   
      </div>
  )
}

export default UserBlock