export default function AddTestimonial() {
  return (
    <div>
      <h2>Add Testimonial</h2>

      <form className="admin-form">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>

        <button>Add</button>
      </form>
    </div>
  );
}