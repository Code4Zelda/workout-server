const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
