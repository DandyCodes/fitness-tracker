const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
