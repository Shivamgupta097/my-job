
import { createContext, useEffect, useState } from "react";
import { axios } from "axios";

///as actually value that we have to access

export const ApplicationContext = createContext({
  id:null,
  applicantData: null,
  setApplicantData: () => null,
  setId:() =>null
});

let data = JSON.parse(localStorage.getItem("user"));



export const ApplicantProvider = ({ children }) => {

  const [applicantData, setApplicantData] = useState([]);
  const [id, setId] = useState();

  const value = {id, applicantData, setApplicantData ,setId };
// console.log(data);


  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
};
