const express = require("express");
require("dotenv").config();
const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ hello: "This is a working API" });
});

const port = process.env.PORT || 6060;

server.listen(port, () => {
  console.log(`\n api is running on ${port}\n`);
});
