import React from 'react';

export const createMailTo = (templates: [string, string], validEmail: string) : string => {
  const toVal = encodeURIComponent(validEmail);
  const subjectVal = encodeURIComponent(templates[0]);
  const bodyVal = encodeURIComponent(templates[1]);

  const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${toVal}&su=${subjectVal}&body=${bodyVal}`;

  return link
}
