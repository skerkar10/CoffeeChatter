import React from 'react'

/**
 * Ensures that are necessary form components are appropriately filled out
 * @param sharedStates Shared state component to track form input
*/
export const validateInput = (sharedStates: any) : boolean => {
  if (!sharedStates.reference) {
    alert("Please provide a Name/Reference");
    return false;
  }
  const names = sharedStates.reference.split(' ');
  if (names.length != 2) {
    alert("Please enter only first and last name seperated by a space");
    return false;
  }
  if (!sharedStates.company) {
    alert("Please provide a Company");
    return false;
  }
  if (!sharedStates.subjectLine) {
    alert("Please provide a subject line");
    return false;
  }
  if (!sharedStates.template) {
    alert("Please provide an email template");
    return false;
  }

  return true;
}
