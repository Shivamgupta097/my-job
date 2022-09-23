import React from 'react';
import "./NoApplicant.scss";
import { ReactComponent as Sheet } from "../assets/curriculum.svg";

const NoApplicant = () => {
  return (
    <div className='no-applicant-container'>
      <div className='no-applicant'>

      <Sheet />
      <p>No applications available!</p>
      </div>
    </div>
  )
}

export default NoApplicant