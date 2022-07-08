import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { Link } from "react-router-dom";

import './header.css'
import UserBlock from "../user-block/user-block";

const Header = () => {

  const auth = getAuth()
  const [user] = useAuthState(auth)

  const btnText = user ? "Выйти" : "Создать аккаунт"
  const path = user ? LOGIN_ROUTE : HOME_ROUTE
  
  

  return (
    <header className="header">
      <Link to = "/" className="header__title">FakeStore</Link>
        {user ? 
        <UserBlock user = {user} /> : null
        }
    </header>
  )
}

export default Header