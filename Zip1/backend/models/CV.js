import mongoose from "mongoose";

const cvSchema = new mongoose.Schema({
  file: String,
}, { timestamps: true });

export default mongoose.model("CV", cvSchema);
