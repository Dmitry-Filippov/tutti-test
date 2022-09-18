const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3010;

app.get("/images", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
