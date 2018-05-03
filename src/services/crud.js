import fhir from "fhir.js";
import uuidv4 from "uuid/v4";
import { configparams } from "../config/config";


export const fhirServer = fhir({
  baseUrl: `${configparams.url}${configparams.service}`,
  credentials: "include",
  mode: "no-cors",
  headers: {
    "ClientTxID": uuidv4(),
    "X-Sender-Id": configparams.id,
    "X-License-Text": configparams.license,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Max-Age": "999999999999"
  }
});

