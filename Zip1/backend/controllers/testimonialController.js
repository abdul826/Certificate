import Testimonial from "../models/Testimonial.js";

export const createTestimonial = async (req, res) => {
  const data = await Testimonial.create(req.body);
  res.json(data);
};

export const getTestimonials = async (req, res) => {
  const data = await Testimonial.find();
  res.json(data);
};

export const getTestimonial = async (req, res) => {
  const data = await Testimonial.findById(req.params.id);
  res.json(data);
};

export const updateTestimonial = async (req, res) => {
  const data = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

export const deleteTestimonial = async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};