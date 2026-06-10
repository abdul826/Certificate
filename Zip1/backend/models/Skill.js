import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  percentage: Number,
  color: String
});

export default mongoose.model("Skill", schema);