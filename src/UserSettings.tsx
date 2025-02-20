import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './App.css';

export default function UserSettings() {
  const navigate = useNavigate();
  const [senderEmail, setSenderEmail] = useState('');

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
            <input placeholder='Sender Email...' className='sender-email-input' onChange={(event) => setSenderEmail(event.target.value)} />
          </div>
        <div>
        </div>
      </form>
    </div>
  )
}
