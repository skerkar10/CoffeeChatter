import React from 'react'

/**
 * Replaces placeholders in the email and subject template with information about the recipient
 * @param sharedStates including information to fill template
*/
export const formatTemplates = (sharedStates: any) : [string, string] => {
  const names = sharedStates.reference.split(" ");
  let company = sharedStates.company;
  company = company[0].toUpperCase() + company.slice(1);

  let newSubject = sharedStates.subjectLine.replaceAll(/\[fname\]/gi, `${names[0]}`);
  newSubject = newSubject.replaceAll(/\[lname\]/gi, `${names[1]}`);
  newSubject = newSubject.replaceAll(/\[company\]/gi, `${company}`);

  let newTemplate = sharedStates.template.replaceAll(/\[fname\]/gi, `${names[0]}`);
  newTemplate = newTemplate.replaceAll(/\[lname\]/gi, `${names[1]}`);
  newTemplate = newTemplate.replaceAll(/\[company\]/gi, `${company}`);

  return [newSubject, newTemplate];
}
