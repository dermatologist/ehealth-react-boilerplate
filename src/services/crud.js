import fhir from "fhir.js";
import uuidv4 from "uuid/v4";
import { configparams } from "../config/config";


export const fhirServer = fhir({
  baseUrl: `${configparams.url}${configparams.service}`,
  headers: {
    "ClientTxID": uuidv4(),
    "X-Sender-Id": configparams.id,
    "X-License-Text": configparams.license,
  }
});

