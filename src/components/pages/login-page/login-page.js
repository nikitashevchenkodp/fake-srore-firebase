import React from "react";
import AuthForm from "../../forms/auth-form";
import Login from "../../forms/login/login";
import './login-page.css'

const LoginPage = () => {
  return (
    <div className="login__page">
      <Login />
    </div>
  )
}

export default LoginPage