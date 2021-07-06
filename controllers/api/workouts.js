const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
  try {
    const workouts = await db.Workout.find({}).exec();
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const workout = await db.Workout.create(new db.Workout(req.body));
    res.status(204).json(workout);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const workout = await db.Workout.findOne({
      _id: req.params.id,
    }).exec();
    const excercise = new db.Excercise(req.body);
    workout.excercises.push(excercise);
    await workout.save();
    res.status(200).json(workout);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
