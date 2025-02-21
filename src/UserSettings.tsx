import React, { useContext } from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './App.css';
import { AppContext } from './AppContext';

export default function UserSettings() {
  const navigate = useNavigate();
  const sharedStates = useContext(AppContext);

  const handleBackPress = () => {
    navigate('/');
  }

  return (
    <div>
      <div className='settings-container'>
        <button className='settings-btn' onClick={handleBackPress}>Back</button>
      </div>
      <div className='header-container'>
        <h1 className='mainHeader'>Settings</h1>
      </div>
      <form className='sender-container'>
        <div className='sender-input-container'>
          <input placeholder='Sender Email...' className='sender-email-input' value={sharedStates.senderEmail} type="email" onChange={(event) => sharedStates.setSenderEmail(event.target.value)} />
        </div>
        <div className='template-container'>
          <textarea className='template-input' spellCheck="true" placeholder='Enter email template' value={sharedStates.template} onChange={(event) => sharedStates.setTemplate(event.target.value)} />
        </div>
      </form>
    </div>
  )
}
