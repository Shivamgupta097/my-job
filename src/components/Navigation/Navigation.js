import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../common/Button';
import Logo from '../Logo';
import "./Navigation.scss"



const Navigation = () => {
  return (
    <>
    <nav>
        <Logo/>
        <Button>Login</Button>  
    </nav>
    <Outlet/>
    </>
  )
}

export default Navigation