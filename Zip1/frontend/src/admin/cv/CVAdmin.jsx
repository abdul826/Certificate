import { useNavigate } from "react-router-dom";

export default function CVAdmin() {
  const navigate = useNavigate();

  return (
    <div>

      <div className="admin-header">
        <h2>Manage CV</h2>
      </div>

      <div className="dashboard-card">

        <input type="file" />

        <button className="add-btn" style={{ marginTop: "15px" }}>
          Upload CV
        </button>

        <button className="delete">Delete CV</button>

      </div>

    </div>
  );
}