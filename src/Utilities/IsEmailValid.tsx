import React from 'react';

/**
 * Checks whether email is valid or not
 * @param email Email to verify existence
 * @returns boolean indicating validity of email
*/
export const IsEmailValid = async (email: string) => {
  try {
    // Hardcoded localhost:8080 we'll need a better way to connect to this
    const res = await fetch("http://localhost:8080/validate", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email}),
    });

    if (res.status === 200) {
      const data = await res.json();

      return data.valid;
    } else if (res.status === 400) {
      console.log("Invalid email format");
      return false;
    }

  }
  catch (e) {
    console.error("Fetch error:", e);
    return false;
  }
}
