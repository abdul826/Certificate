import Skill from "../models/Skill.js";

const normalizeSkillPayload = (body) => {
  const percentage = Number(String(body.percentage ?? "").replace("%", ""));

  if (!Number.isFinite(percentage)) {
    throw new Error("Percentage must be a number");
  }

  return {
    ...body,
    percentage,
  };
};

export const createSkill = async (req, res) => {
  try {
    const data = await Skill.create(normalizeSkillPayload(req.body));
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSkills = async (req, res) => {
  const data = await Skill.find();
  res.json(data);
};

export const getSkill = async (req, res) => {
  const data = await Skill.findById(req.params.id);
  res.json(data);
};

export const updateSkill = async (req, res) => {
  try {
    const data = await Skill.findByIdAndUpdate(
      req.params.id,
      normalizeSkillPayload(req.body),
      { new: true }
    );
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
