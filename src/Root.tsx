import React from 'react';
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { AppContext } from './AppContext';

export default function MainPage() {
  const sharedStates = useContext(AppContext);
  const navigate = useNavigate();

  const handleUserSettings = () => {
    navigate("/user-settings");
  }

  return (
    <div>
      <div className='settings-container'>
        <button className='settings-btn' onClick={handleUserSettings}>Settings</button>
      </div>
      <div className='header-container'>
        <h1 className='mainHeader' id='header'>Coffee Chatter</h1>
      </div>
      <div className='input-container'>
        <input id='email' type="url" className="email-input" placeholder="Enter LinkedIn URL" onChange={(event) => sharedStates.setLink(event.target.value)}/>
      </div>
      <div className='submit-container'>
        <button className='submit-btn'>Submit</button>
      </div>
    </div>
  );
}
