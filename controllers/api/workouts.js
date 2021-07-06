const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
  try {
    const lastWorkout = await db.Workout.findOne(
      {},
      {},
      { sort: { createdAt: -1 } }
    ).exec();
    res.status(200).json(lastWorkout);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
