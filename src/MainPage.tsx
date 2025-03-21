import React from 'react';
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { AppContext } from './AppContext';
import { validateInput } from './Utilities/ValidateInput';
import { formatEmail } from './Utilities/FormatEmail';

export default function MainPage() {
  const sharedStates = useContext(AppContext);
  const navigate = useNavigate();

  const handleUserSettings = () => {
    navigate("/user-settings");
  }

  const handleSubmitPress = () => {
    validateInput(sharedStates);
    formatEmail(sharedStates);
  }

  return (
    <div>
      <div className='settings-container'>
        <button className='settings-btn' onClick={handleUserSettings}>Settings</button>
      </div>
      <div className='header-container'>
        <h1 className='mainHeader' id='header'>Coffee Chatter</h1>
      </div>
      <div className='reference-container'>
        <input type="text" 
          placeholder='Name/Reference'
          value={sharedStates.reference}
          className="reference"
          onChange={(event) => sharedStates.setReference(event.target.value)} />
        <input type="text"
          placeholder='Company'
          value={sharedStates.company}
          className="company"
          onChange={(event) => sharedStates.setCompany(event.target.value)} />
      </div>
      <div className='submit-container'>
        <button className='submit-btn' onClick={handleSubmitPress}>Submit</button>
      </div>
    </div>
  );
}
