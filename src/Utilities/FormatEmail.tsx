import React from 'react'

export const formatEmail = (sharedStates: any) : string => {
  const words = sharedStates.template.split(" ");
  let output = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "[name]") {
      output += sharedStates.name;
      output += " ";
      continue;
    }
    if (words[i].toLowerCase() === "[company]") {
      output += sharedStates.company;
      output += " ";
      continue;
    }

    output += words[i];
    output += " ";
  }

  return output;
}
