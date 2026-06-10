import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  description: String,
  clientName: String
});

export default mongoose.model("Testimonial", schema);