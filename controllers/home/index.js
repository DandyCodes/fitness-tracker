const router = require("express").Router();
const db = require("../../models");

router.get("/stats", (req, res) => {
  res.redirect("/stats.html");
});

router.get("/exercise", (req, res) => {
  res.redirect("/exercise.html");
});

module.exports = router;
