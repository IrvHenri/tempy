const express = require("express");
const router = express.Router();
const cityData = require("../data/city-data.json");
const weatherController = require("../controllers/weather-data.controller");

// Get list of cities from json file
router.get("/", function (req, res, next) {
  res.send(cityData);
});

// Get weather data from axios. Make one call.
router.get("/:id/weather-data", weatherController.getWeatherData);

module.exports = router;
