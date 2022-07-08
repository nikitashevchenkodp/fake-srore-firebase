import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {FcGoogle} from "react-icons/fc"
import './login.css'
import { Link } from "react-router-dom";



const Login = () => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const history = useHistory()


  const onLogin = (e) => {
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        history.push('/')
      })
        .catch(() => alert('you dont have an account'))

  }

  const onLoginWithGoogle = (e) => {
    e.preventDefault()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user)
      }).catch((error) => {
        console.log(error)

      });
  }


  return (
    <form className="form">

      <h4 className="form__title">Log in</h4>

      <div className="form__group">
        <input className="form__input"
          type="email" placeholder=" "
          value={email} 
          onChange={(e) => setEmail(e.target.value)}/>
        <label className="form__label">Email</label>
      </div>

      <div className="form__group">
        <input className="form__input"
          type="password" placeholder=" " 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} />
        <label className="form__label">Password</label>
      </div>

     <div className="login__buttons">
      <button className="form__button" onClick = {(e) => onLogin(e)} >
          Log in
        </button>
        <button className="form__button google" onClick = {(e) => onLoginWithGoogle(e)} >
          <div className="button__inner">
            Log in with <FcGoogle size = {20}/>
          </div>
        </button>
        <div className="link__container">
          <Link className="link" to = '/signup'>
            Do you want to create an account?
          </Link>
        </div>
     </div> 
  
    </form>
  )

}

export default Login