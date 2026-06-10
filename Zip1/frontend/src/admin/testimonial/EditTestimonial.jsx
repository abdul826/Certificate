import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTestimonial() {
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
        const res = await fetch(`http://localhost:5000/api/testimonials/${id}`);
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

  /* ✅ HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ✅ UPDATE DATA */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/testimonials/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // ✅ later add token here
          // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Updated:", data);

      alert("Testimonial Updated ✅");

      /* ✅ redirect back */
      navigate("/admin/testimonial");

    } catch (err) {
      console.error(err);
    }
  };

  /* ✅ LOADING STATE */
  if (loading) return <h3>Loading...</h3>;

  return (
    <div>

      <h2>Edit Testimonial</h2>

      <form className="admin-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <button type="submit">Update Testimonial</button>

      </form>

    </div>
  );
}
