package main

import (
  "EmailChecker/Validate"
  "net/http"
  "log"
)

func main() {
  http.HandleFunc("/validate", Validate.ValidateHandler)
  log.Fatal(http.ListenAndServe(":8080", nil))
}
