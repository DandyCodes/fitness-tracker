const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
  try {
    const workouts = await db.Workout.find({}).populate("exercises").exec();
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const workout = await db.Workout.create(req.body);
    res.json(workout);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const workout = await db.Workout.findOne({
      _id: req.params.id,
    })
      .populate("exercises")
      .exec();
    const exercise = await db.Exercise.create(req.body);
    workout.exercises.push(exercise);
    console.log(exercise);
    workout.totalDuration += exercise.duration;
    await workout.save();
    res.status(200).json(workout);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
