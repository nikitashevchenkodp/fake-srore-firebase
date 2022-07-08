import { getAuth } from "firebase/auth";
import React from "react";
import { useHistory } from "react-router-dom";
import './user-menu.css'

const UserMenu = () => {

  const auth = getAuth()
  const history = useHistory()

  return (
    <div className="user__menu">
      <button className="user__menu__btn" onClick={() => history.push('/favorite')}>
        Favorits
      </button>
      <button className="user__menu__btn" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  )
}

export default UserMenu