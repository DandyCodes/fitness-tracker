const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise;
