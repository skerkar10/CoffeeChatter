import React from 'react';
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { AppContext } from './AppContext';
import { validateInput } from './Utilities/ValidateInput';
import { formatEmail } from './Utilities/FormatEmail';
import { FormatReceiverEmail } from './Utilities/FormatReceiverEmail';
import { IsEmailValid } from './Utilities/IsEmailValid';

export default function MainPage() {
  const sharedStates = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleUserSettings = () => {
    navigate("/user-settings");
  }

  const handleSubmitPress = async (e: any) => {
    validateInput(sharedStates);
    formatEmail(sharedStates);
    e.preventDefault();
    setIsLoading(true);
    const emailsToCheck = FormatReceiverEmail(sharedStates);
    let validIdx = -1;

    for (let i = 0; i < emailsToCheck.length; i++) {
      if (await IsEmailValid(emailsToCheck[i])) {
        validIdx = i;
        break;
      }
    }

    if (validIdx === -1) {
      alert("Could not find valid email");
      return;
    }

    setIsLoading(false);
    alert(emailsToCheck[validIdx]); /* We alert for now */
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
