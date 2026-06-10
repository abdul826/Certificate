import { useNavigate } from "react-router-dom";

export default function TestimonialAdmin() {
  const navigate = useNavigate();

  return (
    <div>

      <div className="admin-header">
        <h2>Testimonials</h2>

        <button
          className="add-btn"
          onClick={() => navigate("/admin/testimonial/add")}
        >
          + Add Testimonial
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
            <td>Great Work</td>
            <td>Client satisfied</td>
            <td>
              <button
                className="edit"
                onClick={() => navigate("/admin/testimonial/edit/1")}
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