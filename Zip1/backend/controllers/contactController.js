import Contact from "../models/Contact.js";

/* CREATE */
export const createContact = async (req, res) => {
  const data = await Contact.create(req.body);
  res.json(data);
};

/* GET ALL */
export const getContacts = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};

/* GET SINGLE */
export const getContact = async (req, res) => {
  const data = await Contact.findById(req.params.id);
  res.json(data);
};

/* DELETE */
export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};