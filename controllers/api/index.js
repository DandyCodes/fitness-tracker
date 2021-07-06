const router = require("express").Router();
const workouts = require("./workouts");

router.use("/workouts", workouts);

module.exports = router;
