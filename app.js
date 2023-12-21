const express = require("express");
const app = express();

const people = require("./routes/people");
const login = require("./routes/auth");

//static asset
app.use(express.static("./methods-public"));

//parsem form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.use("/api/people", people);

app.use("/login", login);

app.listen(5000, () => {
  console.log("listening on server");
});
