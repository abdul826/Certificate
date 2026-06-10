import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddSkill } from "../../redux/slices/skillSlice/skillSlice.js";
import { useNavigate } from "react-router-dom";

export default function AddSkillPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    percentage: "",
    color: "",
  });

  /* ✅ HANDLE INPUT */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ✅ SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("STEP 1: Form Submit ✅", form);

    await dispatch(AddSkill(form));

    navigate("/admin/skills");
  };

  return (
    <div>
      <h2>Add Skill</h2>

      <form className="admin-form" onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Skill Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="percentage"
          placeholder="Percentage"
          min="0"
          max="100"
          onChange={handleChange}
        />

        <input
          name="color"
          placeholder="Color Code"
          onChange={handleChange}
        />

        <button type="submit">Add Skill</button>

      </form>
    </div>
  );
}
