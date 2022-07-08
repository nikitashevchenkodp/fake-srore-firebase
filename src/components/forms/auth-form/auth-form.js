// import React from "react";
// import { useState } from "react";
// import Login from "../login/login";
// import SignUp from "../sign-up";

// const AuthForm = () => {

//   const [ logOrSing, setLogOrSign ] = useState(false)
//   const mainBtn = logOrSing ? "Sign in" : "Sign Up"
//   const btnInner = logOrSing ? "Do you want to create an account?" : "Alredy have an account?"
//   const form = logOrSing ? <Login /> : <SignUp />

//   const onLogin = (e) => {
//     e.preventDefault()
//     const auth = getAuth()
//     signInWithEmailAndPassword(auth, email, pass)
//       .then((data) => {
//         const user = data.user
//         history.push('/')
//       })
//         .catch(() => alert('you dont have an account'))

//   }

//   const onSignUp = (e) => {
//     e.preventDefault()
//     console.log('i work')
//     createUserWithEmailAndPassword(auth, email, pass)
//       .then(() => {
//         console.log('your account has been created')
//       })
//         .catch(() => alert('you have an account!'))

//   }

//   const onLoginWithGoogle = (e) => {
//     e.preventDefault()
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//         console.log(user)

//       }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         console.log(errorCode, errorMessage, email, credential)
//       });
//       }

//       const handleClick = logOrSing ? onLogin(e) : onSignUp(e)


//   return (
//     <form className="form">

//       <h4 className="form__title">{mainBtn}</h4>

//       {form}

//      <button className="form__button" onClick = {handleClick} >
//         {mainBtn}
//       </button>
//       <button className="form__button google" onClick = {(e) => onLoginWithGoogle(e)} >
//         Log in with <FcGoogle size = {20}/>
//       </button>
//       <div onClick={() =>setLogOrSign((logOrSing) => !logOrSing) }>
//         {btnInner}
//       </div>

//     </form>
//   )
// }

// export default AuthForm