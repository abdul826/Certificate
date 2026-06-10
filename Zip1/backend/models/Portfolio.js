import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  category: String
}, { timestamps: true });

export default mongoose.model("Portfolio", portfolioSchema);