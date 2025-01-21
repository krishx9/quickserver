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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
