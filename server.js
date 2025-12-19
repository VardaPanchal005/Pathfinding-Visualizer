const express = require("express");
const RateLimit = require("express-rate-limit");

const app = express();

const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use("/public", express.static(__dirname + "/public"))

app.get("/", limiter, (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(1337, () => {
  console.log("The server is up and running!");
});