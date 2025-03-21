package Validate

import (
	"encoding/json"
	"net"
	"net/http"
	"net/mail"
	"net/smtp"
	"strings"
	"time"
)

/*
 * Is a given email is sendable?
 */
func validateEmail(email string) bool {
  domain := email[strings.LastIndex(email, "@") + 1:]

  mxRecords, err := net.LookupMX(domain)

  if err != nil {
    return false //Domain doesn't have MX records
  }

  for i := 0; i < len(mxRecords); i++ {
    /*
     * We don't wanna waste too much time on each record
     * we can just give it 10 seconds to respond
    */
    con, err := net.DialTimeout("tcp", mxRecords[i].Host+":25", 10 * time.Second)
    if err != nil {
      continue
    }

    client, err := smtp.NewClient(con, mxRecords[i].Host)
    if err != nil {
      continue
    }

    defer client.Close()

    err = client.Hello("validator.local")

    if err != nil {
      continue
    }

    err = client.Mail("test@validator.local")

    if err != nil {
      continue
    }

    err = client.Rcpt(email)

    if err == nil {
      return true
    }

  }

  return false
}

func throwBadEmail(w http.ResponseWriter) {
  http.Error(w, "Invalid email format", http.StatusBadRequest)
}

func jsonResponse(w http.ResponseWriter, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(data)
}

func ValidateHandler(w http.ResponseWriter, r *http.Request) {
  var data struct {
    Email string `json:"email"`
  }

  err := json.NewDecoder(r.Body).Decode(&data)

  if (err != nil || data.Email == "") {
    throwBadEmail(w)
    return
  }

  _, err = mail.ParseAddress(data.Email)

  if err != nil {
    jsonResponse(w, map[string]bool{"valid": false})
    return
  }

  valid := validateEmail(data.Email)

  jsonResponse(w, map[string]bool{"valid": valid})
}
