
import { createContext, useEffect, useState } from "react";
import { axios } from "axios";

///as actually value that we have to access

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  getUser: () => null
});

let data = JSON.parse(localStorage.getItem("user"));



export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(data);
  const value = { currentUser, setCurrentUser };
// console.log(data);


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
