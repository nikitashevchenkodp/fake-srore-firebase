import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confPass, setConfPass] = useState('')

  const auth = getAuth();

  const onSignUp = (e) => {

    e.preventDefault()
    console.log('i work')
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        console.log('your account has been created')
      })
        .catch(() => alert('you have an account!'))

  }


  const onLoginWithGoogle = (e) => {
    e.preventDefault()
    
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

      <h4 className="form__title">Sign Up</h4>

      <div className="form__group">
        <input className="form__input"
          type="text" placeholder=" "
          value={name} 
          onChange={(e) => setName(e.target.value)}/>
        <label className="form__label">Enter you name</label>
      </div>

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

      <div className="form__group">
        <input className="form__input"
          type="password" placeholder=" " 
          value={confPass} 
          onChange={(e) => setConfPass(e.target.value)} />
        <label className="form__label">Password</label>
      </div>

     <div className="login__buttons">
     <button className="form__button" onClick = {(e) => onSignUp(e)} >
        Sign Up
      </button>
      <button className="form__button google" onClick = {(e) => onLoginWithGoogle(e)} >
          <div className="button__inner">
            Log in with <FcGoogle size = {20}/>
          </div>
      </button>
      <div className="link__container">
        <Link className="link" to="/login">
          Alredy have an account?
        </Link>
      </div>
    </div> 
     

    </form>
  )
}

export default SignUp