import React from 'react';
import SignInForm from '../../components/SignInForm';
import "./Login.scss"


const Login = () => {
  return (

    <div className="bg-color">
      <div className='login-container'>
        <SignInForm />
      </div>
    </div>
  )
}

export default Login