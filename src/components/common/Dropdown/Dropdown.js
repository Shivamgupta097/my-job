import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserDp from '../UserDp'
import "./Dropdown.scss";
import { ReactComponent as DownArrow } from "../../../assets/downArrow.svg";
import { UserContext } from '../../../context/userContext';
import Cookies from 'universal-cookie';

const Dropdown = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { name } = currentUser


  // logout function 
  const logoutHandler = () => {
    navigate('/');
    setCurrentUser(null);
    localStorage.removeItem("user");
    const cookie = new Cookies();
    cookie.remove("tkn");
  }

  return (
    <div className="main-container">
      <UserDp name={name} />
      <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><DownArrow /></div>
      <div className="dropdown-menu menu" aria-labelledby="dropdownMenuButton">
        <p className="dropdown-item item" onClick={logoutHandler}>Logout</p>
      </div>
    </div>
  )
}

export default Dropdown