const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
  try {
    const workouts = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.get("/range", async (req, res) => {
  try {
    const lastSevenWorkouts = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]).limit(7);
    console.log(lastSevenWorkouts);
    res.status(200).json(lastSevenWorkouts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const workout = await db.Workout.create(req.body);
    res.json(workout);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await db.Workout.updateOne(
      { _id: req.params.id },
      {
        $push: {
          exercises: req.body,
        },
      }
    );
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
