import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }, 
  description: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Habit = new mongoose.model("Habit", habitSchema);

export default Habit;