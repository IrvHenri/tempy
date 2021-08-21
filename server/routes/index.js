var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.json({
    message:
      "✨👋🌎 Welcome To Irving's Weather Api! Thanks for reviewing my assignment! 🌍🌏✨",
  });
});

module.exports = router;
