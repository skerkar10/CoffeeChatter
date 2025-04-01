import React from 'react'

/**
 * Ensures that are necessary form components are appropriately filled out
 * @param sharedStates Shared state component to track form input
*/
export const validateInput = (sharedStates: any) => {
  if (!sharedStates.reference) {
    alert("Please provide a Name/Reference");
    return;
  }
  const names = sharedStates.reference.split(' ');
  if (names.length != 2) {
    alert("Please enter only first and last name seperated by a space");
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
