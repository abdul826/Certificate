import { useNavigate } from "react-router-dom";

export default function PortfolioAdmin() {
  const navigate = useNavigate();

  return (
    <div>

      <div className="admin-header">
        <h2>Portfolio</h2>

        <button
          className="add-btn"
          onClick={() => navigate("/admin/portfolio/add")}
        >
          + Add Project
        </button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>App UI</td>
            <td>Design</td>
            <td>
              <button
                className="edit"
                onClick={() => navigate("/admin/portfolio/edit/1")}
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