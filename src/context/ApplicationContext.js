
import { createContext,useState } from "react";

///as actually value that we have to access

export const ApplicationContext = createContext({
  id:null,
  applicantData: null,
  setApplicantData: () => null,
  setId:() =>null
});

let data = JSON.parse(localStorage.getItem("user"));

//Applocation provider
export const ApplicantProvider = ({ children }) => {
  const [applicantData, setApplicantData] = useState([]);
  const [id, setId] = useState();

  const value = {id, applicantData, setApplicantData ,setId };

  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
};
