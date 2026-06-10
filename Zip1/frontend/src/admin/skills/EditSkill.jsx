import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { GetSkills, UpdateSkill } from "../../redux/slices/skillSlice/skillSlice.js";

export default function EditSkill() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { SkillsData } = useSelector((state) => state.skills);

  const [form, setForm] = useState({
    name: "",
    percentage: "",
    color: "",
  });

  /* ✅ LOAD DATA */
  useEffect(() => {

    if (SkillsData.length === 0) {
      dispatch(GetSkills());
    } else {
      const singleSkill = SkillsData.find((item) => item._id === id);

      if (singleSkill) {
        setForm({
          name: singleSkill.name,
          percentage: singleSkill.percentage,
          color: singleSkill.color,
        });
      }
    }

  }, [SkillsData, id, dispatch]);

  /* ✅ CHANGE */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ✅ SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      UpdateSkill({
        id: id,
        form: form,
      })
    );

    navigate("/admin/skills");
  };

  return (
    <div>

      <h2>Edit Skill</h2>

      <form className="admin-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="percentage"
          value={form.percentage}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <input
          type="text"
          name="color"
          value={form.color}
          onChange={handleChange}
        />

        <button type="submit">Update Skill</button>

      </form>
    </div>
  );
}
