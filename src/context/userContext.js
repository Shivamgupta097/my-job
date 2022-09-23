
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

///as actually value that we have to access

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  getUser: () => null
});

let data = JSON.parse(localStorage.getItem("user"));



export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(data);

  const navigate = useNavigate();



  const value = { currentUser, setCurrentUser};



  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
