import React from 'react'

export const validateInput = (sharedStates: any) => {
    if (!sharedStates.reference) {
      alert("Please provide a Name/Reference");
      return;
    }
    if (!sharedStates.company) {
      alert("Please provide a Company");
      return;
    }
    if (!sharedStates.senderEmail) {
      alert("Please provide a sender email");
      return;
    }
    if (!sharedStates.template) {
      alert("Please provide an email template");
      return;
    }
}
