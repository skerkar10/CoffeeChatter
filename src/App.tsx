import React from 'react';
import {useState, useEffect} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Root';
import UserSettings from './UserSettings';
import { AppContext } from './AppContext';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [template, setTemplate] = useState('');

  return (
    <AppContext.Provider value={{link, setLink, senderEmail, setSenderEmail, template, setTemplate}}>
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
