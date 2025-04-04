import React from 'react';
import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import { AppContext } from './AppContext';
import { validateInput } from './Utilities/ValidateInput';
import { formatTemplates } from './Utilities/FormatTemplates';
import { FormatReceiverEmail } from './Utilities/FormatReceiverEmail';
import { IsEmailValid } from './Utilities/IsEmailValid';
import { createMailTo } from './Utilities/CreateMailTo';

export default function MainPage() {
  const sharedStates = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleUserSettings = () => {
    navigate("/user-settings");
  }

  const handleSubmitPress = async (e: any) => {
    if (!validateInput(sharedStates)) {
      return;
    }

    const templates = formatTemplates(sharedStates);
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

    const validEmail = emailsToCheck[validIdx];

    const mailingLink = createMailTo(templates, validEmail);

    window.open(mailingLink, "_blank");
  }

  return (
    <div>
      <head>
        <title>Coffee Chatter</title>
      </head>
      <div className='settings-container'>
        <div className='credit-container'>
          <h3 className='credit'>Created by Sahil Kerkar at the University of Michigan</h3>
        </div>
        <button className='settings-btn' onClick={handleUserSettings}>Settings</button>
      </div>
      <div className='header-container'>
        <h1 className='mainHeader' id='header'>Coffee Chatter</h1>
      </div>
      <div className='subtitle-container'>
        <h3 className='subtitle'>Your open source solution to networking!</h3>
      </div>
      <div className='reference-container'>
        <input type="text" 
          placeholder='Enter name/reference...'
          value={sharedStates.reference}
          className="reference"
          onChange={(event) => sharedStates.setReference(event.target.value)} />
        <input type="text"
          placeholder='Enter company...'
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
