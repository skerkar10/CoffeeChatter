import React from 'react'

/**
 * Replaces placeholders in the email and subject template with information about the recipient
 * @param sharedStates including information to fill template
*/
export const formatTemplates = (sharedStates: any) : [string, string] => {
  let newSubject = sharedStates.subjectLine.replaceAll(/\[name\]/gi, `${sharedStates.reference}`);
  newSubject = newSubject.replaceAll(/\[company\]/gi, `${sharedStates.company}`);

  let newTemplate = sharedStates.template.replaceAll(/\[name\]/gi, `${sharedStates.reference}`);
  newTemplate = newTemplate.replaceAll(/\[company\]/gi, `${sharedStates.company}`);

  return [newSubject, newTemplate];
}
