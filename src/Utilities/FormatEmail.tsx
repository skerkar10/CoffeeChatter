import React from 'react'

export const formatEmail = (sharedStates: any) : string => {
  const templateWords = sharedStates.template.split(" ");
  let output = "";

  for (let i = 0; i < templateWords.length; i++) {
    if (templateWords[i] == "[name]") {
      output += sharedStates.name;
      output += " ";
      continue;
    }
    if (templateWords[i] == "[company]") {
      output += sharedStates.company;
      output += " ";
      continue;
    }

    output += templateWords[i];
    output += " ";
  }

  return output;
}
