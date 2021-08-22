const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const citiesRouter = require("./routes/cities");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/api/cities", citiesRouter);

module.exports = app;
