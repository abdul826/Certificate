import { useNavigate } from "react-router-dom";

export default function ServicesAdmin() {
  const navigate = useNavigate();

  return (
    <div>

      <div className="admin-header">
        <h2>Services</h2>

        <button
          className="add-btn"
          onClick={() => navigate("/admin/services/add")}
        >
          + Add Service
        </button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web Design</td>
            <td>Modern UI</td>
            <td>
              <button
                className="edit"
                onClick={() => navigate("/admin/services/edit/1")}
              >
                Edit
              </button>

              <button className="delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}