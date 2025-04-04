import React from 'react';

/**
 * Creates formats most common email formats using reference and company
 * @param sharedStates shared state containing company and recipient reference
 * @returns Array containing most common email formats.
*/
export const FormatReceiverEmail = (sharedStates: any): string[] => {
  let emailOptions = [];

  const nameLower = sharedStates.reference.toLowerCase();
  const domain = sharedStates.company.toLowerCase();

  const names = nameLower.split(' ');

  emailOptions.push(`${names[0]}.${names[1]}@${domain}.com`);
  emailOptions.push(`${names[0][0]}${names[1]}@${domain}.com`);
  emailOptions.push(`${names[0][0]}.${names[1]}@${domain}.com`);
  emailOptions.push(`${names[0]}@${domain}.com`);
  emailOptions.push(`${names[1]}.${names[0][0]}@${domain}.com`);
  emailOptions.push(`${names[0]}_${names[1]}@${domain}.com`);
  emailOptions.push(`${names[0]}${names[1]}@${domain}.com`);
  emailOptions.push(`${names[0]}${names[1][0]}@${domain}.com`);

  return emailOptions;
}
