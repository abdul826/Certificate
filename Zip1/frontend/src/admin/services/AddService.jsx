export default function AddService() {
  return (
    <div>
      <h2>Add Service</h2>

      <form className="admin-form">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>

        <button>Add</button>
      </form>
    </div>
  );
}