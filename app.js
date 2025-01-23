const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const jsonFilePath = "wallet.json"; // Path to your JSON file

app.get("/wallet", (req, res) => {
  const data = fs.readFileSync(jsonFilePath);
  res.json(JSON.parse(data));
});

app.post("/wallet", (req, res) => {
  const newData = req.body;
  fs.writeFileSync(jsonFilePath, JSON.stringify(newData, null, 2));
  res.json(newData);
});

app.post("/credit", (req, res) => {
  console.log("Webhook received credit:", req.body);
  res.status(200).send("Webhook received");
});

app.post("/debit", (req, res) => {
  console.log("Webhook received debit:", req.body);
  res.status(200).send("Webhook received");
});

app.post("/bankVerify", (req, res) => {
  console.log("Webhook received verify:", req.body);
  res.status(200).send("Webhook received");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
