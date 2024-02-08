const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Congratulations!!!</h1><p>Server is Running</p>`);
});
app.listen(4000, () => {
  console.log("Server Listening to PORT 4000...");
});
