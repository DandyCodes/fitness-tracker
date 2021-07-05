require("dotenv").config();
const path = require("path");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("./controllers");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
  useNewUrlParser: true,
});

app.use(router);

app.listen(PORT, () => {
  console.log("Now listening on port", PORT);
});
