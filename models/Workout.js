const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  excercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Excercise",
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
