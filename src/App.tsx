import React from 'react';
import {useState, useEffect} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './Root';
import UserSettings from './UserSettings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/user-settings' element={<UserSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
