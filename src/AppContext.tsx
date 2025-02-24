import React, { SetStateAction } from 'react';
import { createContext, Dispatch } from 'react'

/*
 * I don't even wanna say how long it took me to figure out that typescript
 * needs this stuff
*/
type AppContextType = {
  link: string;
  setLink: Dispatch<SetStateAction<string>>;
  senderEmail: string;
  setSenderEmail: Dispatch<SetStateAction<string>>;
  template: string;
  setTemplate: Dispatch<SetStateAction<string>>;
  reference: string;
  setReference: Dispatch<SetStateAction<string>>;
  company: string;
  setCompany: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
  link: '',
  setLink: () => {},
  senderEmail: '',
  setSenderEmail: () => {},
  template: '',
  setTemplate: () => {},
  reference: '',
  setReference: () => {},
  company: '',
  setCompany: () => {}
});
