import React from 'react'

/**
 * Replaces placeholders in the email and subject template with information about the recipient
 * @param sharedStates including information to fill template
*/
export const formatTemplates = (sharedStates: any) => {
  const splitTemplate = sharedStates.template.split(" ");
  const splitSubject = sharedStates.subjectLine.split(" ");
  let newTemplate = "";
  let newSubject = "";

  for (let i = 0; i < splitTemplate.length; i++) {
    if (splitTemplate[i].toLowerCase() === "[name]") {
      newTemplate += sharedStates.name;
      newTemplate += " ";
      continue;
    }

    if (splitTemplate[i].toLowerCase() === "[company]") {
      newTemplate += sharedStates.company;
      newTemplate += " ";
      continue;
    }

    newTemplate += splitTemplate[i];
    newTemplate += " ";
  }

  for (let i = 0; i < splitSubject.length; i++) {
    if (splitSubject[i].toLowerCase() === "[name]") {
      newSubject += sharedStates.name;
      newSubject += " ";
      continue;
    }

    if (splitSubject[i].toLowerCase() === "[company]") {
      newSubject += sharedStates.company;
      newSubject += " ";
      continue;
    }

    newSubject += splitSubject[i];
    newSubject += " ";
  }

  sharedStates.setTemplate(newTemplate);
  sharedStates.setSubjectLine(newSubject);
}
