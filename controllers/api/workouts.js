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

router.post("/", async (req, res) => {
  try {
    const workout = new db.Workout(req.body);
    const result = await db.Workout.create(workout);
    res.status(204).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const currentWorkout = await db.Workout.findOne({
      _id: req.params.id,
    }).exec();
    const newWorkout = new db.Workout(req.body);
    currentWorkout = newWorkout;
    await currentWorkout.save();
    res.status(200).json(currentWorkout);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
