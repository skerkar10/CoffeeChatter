import React from 'react';
import {useState, useEffect} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';
import UserSettings from './UserSettings';
import { AppContext } from './AppContext';
import './App.css';

function App() {
  const [senderEmail, setSenderEmail] = useState('');
  const [template, setTemplate] = useState('');
  const [reference, setReference] = useState('');
  const [company, setCompany] = useState('');

  return (
    <AppContext.Provider value={{senderEmail, setSenderEmail, template, setTemplate, reference, setReference, company, setCompany}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/user-settings' element={<UserSettings />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
