import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


import './index.css';
import App from './App';
import { UserProvider } from './context/userContext';
import { ApplicantProvider } from './context/ApplicationContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/my-job'>
      <UserProvider>
        <ApplicantProvider>
          <App />
        </ApplicantProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


