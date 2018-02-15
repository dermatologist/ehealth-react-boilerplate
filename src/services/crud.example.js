import axios from "axios";

export const fhirServer = axios.create({
  // baseURL: "",
  credentials: 'same-origin',
  headers: {
    "Content-Type": "application/json"
  }
});
