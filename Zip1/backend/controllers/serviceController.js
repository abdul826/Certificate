import Service from "../models/Service.js";

export const createService = async (req, res) => {
  const data = await Service.create(req.body);
  res.json(data);
};

export const getServices = async (req, res) => {
  const data = await Service.find();
  res.json(data);
};

export const getService = async (req, res) => {
  const data = await Service.findById(req.params.id);
  res.json(data);
};

export const updateService = async (req, res) => {
  const data = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

export const deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
