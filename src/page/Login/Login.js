import React from 'react';
import { Outlet } from 'react-router-dom';


const Login = () => {
  return (
    <div className='login'>
        <Outlet/>
    </div>
  )
}

export default Login