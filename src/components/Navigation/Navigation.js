import React from 'react';
import Button from '../common/Button';
import Logo from '../Logo';
import "./Navigation.scss"



const Navigation = () => {
  return (
    <nav>
        <Logo/>
        <Button>Login</Button>     
    </nav>
  )
}

export default Navigation