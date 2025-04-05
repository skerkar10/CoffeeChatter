import React, { useContext } from 'react'
import {useState, useEffect} from 'react'
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
      <head>
        <title>Settings</title>
      </head>
      <div className='settings-container'>
        <button className='settings-btn' onClick={handleBackPress}>Back</button>
      </div>
      <div className='header-container'>
        <h1 className='mainHeader'>Settings</h1>
      </div>
      <form className='sender-container'>
        <div className='subject-line-container'>
          <input placeholder='Enter subject line...'
            className='subject-line'
            value={sharedStates.subjectLine}
            type="email" onChange={(event) => sharedStates.setSubjectLine(event.target.value)} />
        </div>
        <div className='template-container'>
          <textarea className='template-input'
            spellCheck="true"
            placeholder='Enter email template...'
            value={sharedStates.template}
            onChange={(event) => sharedStates.setTemplate(event.target.value)} />
        </div>
      </form>
    </div>
  )
}
