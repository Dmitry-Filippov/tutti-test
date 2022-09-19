const express = require("express");
const data = require("./data.json");
const app = express();
const cors = require("cors");
const port = 3010;

app.use(cors());

app.get("/images", (req, res) => {
  res.send(data);
});

app.post("/images/:imageId", (req, res) => {
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
