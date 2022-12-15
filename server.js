const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.redirect("index");
});

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/listing", (req, res) => {
  res.render("list");
});

app.listen(3000);
