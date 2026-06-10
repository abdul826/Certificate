import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSkills, DeleteSkill } from "../../redux/slices/skillSlice/skillSlice.js";
import { useNavigate } from "react-router-dom";

export default function SkillsAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { SkillsData, loading } = useSelector((state) => state.skills);

  /* ✅ FETCH */
  useEffect(() => {
    dispatch(GetSkills());
  }, [dispatch]);

  return (
    <div>

      <div className="admin-header">
        <h2>Skills</h2>

        <button
          className="add-btn"
          onClick={() => navigate("/admin/skills/add")}
        >
          + Add Skill
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {SkillsData &&
            SkillsData.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.percentage}%</td>

                <td>
                  {/* ✅ EDIT */}
                  <button
                    className="edit"
                    onClick={() =>
                      navigate(`/admin/skills/edit/${item._id}`)
                    }
                  >
                    Edit
                  </button>

                  {/* ✅ DELETE */}
                  <button
                    className="delete"
                    onClick={() => dispatch(DeleteSkill(item._id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}