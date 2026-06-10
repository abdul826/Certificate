import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ✅ Register Admin (only once)
export const registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const admin = await Admin.create({ email, password: hash });

  res.json(admin);
};

// ✅ Login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) return res.status(400).json("Admin not found");

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) return res.status(400).json("Wrong password");

  const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY);

  res.json({ token });
};
