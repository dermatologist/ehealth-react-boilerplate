import express from "express";
import request from "request";
import uuidv4 from "uuid/v4";
import { configparams } from "../src/config/config";

const app = express();

app.use("/api", (req, res) => {
  const api = {
    url: `http://lite.innovation-lab.ca:9443${  req.url}`,
    headers: {
      "User-Agent": "request",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-License-Text, X-Sender-Id, ClientTxID, Origin, X-Requested-With, Content-Type, Accept",
      "X-Sender-Id": configparams.id,
      "X-License-Text": configparams.license,
      "ClientTxID": uuidv4()
    }
  };
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-License-Text, X-Sender-Id, ClientTxID, Origin, X-Requested-With, Content-Type, Accept");

  if (req.method === "OPTIONS") {
    // respond with 200
    res.send(200);
  } else {
    req.pipe(request(api)).pipe(res);
  }
});
app.listen(5000);
