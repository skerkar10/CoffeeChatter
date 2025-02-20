import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function MainPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleUserSettings = () => {
    navigate("/user-settings");
  }

  return (
    <div>
      <div className='settings-container'>
        <button className='settings-btn' onClick={handleUserSettings}>User Settings</button>
      </div>
      <div className='header-container'>
        <h1 className='mainHeader' id='header'>Coffee Chatter</h1>
      </div>
      <div className='input-container'>
        <input id='email' type={email} className="email-input" maxLength={60} onChange={(event) => setEmail(event.target.value)}/>
      </div>
      <div className='submit-container'>
        <button className='submit-btn'>Submit</button>
      </div>
    </div>
  );
}
