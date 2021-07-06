const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  type: String,
  name: String,
  weight: Number,
  sets: Number,
  reps: Number,
  distance: Number,
  duration: Number,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
