import React, { useEffect, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import Button from '../common/Button';
import Dropdown from '../common/Dropdown';
import Logo from '../Logo';
import "./Navigation.scss"

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <nav>
        <Link to="/" className="nav-link"><Logo /></Link>
        {currentUser ? <Dropdown /> : <Link to="/login" className="nav-link"><Button>Login</Button></Link>
        }
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation;