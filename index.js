const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const tutorialRoute = require("./routes/tutorial.js");
const authRoute = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use(tutorialRoute);
app.use(authRoute);

app.listen(8000, () => {
  console.log("APP CONNECTED");
});

mongoose.connect("mongodb://localhost:27017/test", () => {
  console.log("DB CONNECTED");
});
