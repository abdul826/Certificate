import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

  /* ✅ FETCH EXISTING DATA */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/services/${id}`);
        const data = await res.json();

        setForm({
          title: data.title,
          description: data.description,
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  /* ✅ HANDLE CHANGE */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ✅ UPDATE SERVICE */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/services/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // ✅ later: Authorization token
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Updated:", data);

      alert("Service Updated ✅");

      navigate("/admin/services"); // ✅ redirect

    } catch (err) {
      console.error(err);
    }
  };

  /* ✅ LOADING STATE */
  if (loading) return <h3>Loading...</h3>;

  return (
    <div>

      <h2>Edit Service</h2>

      <form className="admin-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Service Title"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Service Description"
        />

        <button type="submit">Update Service</button>

      </form>

    </div>
  );
}