import Portfolio from "../models/Portfolio.js";

/* CREATE */

export const createPortfolio = async (req, res) => {
  const data = await Portfolio.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    image: req.file ? req.file.filename : null
  });

  res.json(data);
};


/* GET ALL */
export const getPortfolio = async (req, res) => {
  const data = await Portfolio.find();
  res.json(data);
};

/* GET SINGLE */
export const getSinglePortfolio = async (req, res) => {
  const data = await Portfolio.findById(req.params.id);
  res.json(data);
};

/* UPDATE */
export const updatePortfolio = async (req, res) => {
  const data = await Portfolio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

/* DELETE */
export const deletePortfolio = async (req, res) => {
  await Portfolio.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};