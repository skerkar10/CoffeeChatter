import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  return (
    <div>
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

export default App;
