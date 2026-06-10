export default function AddPortfolio() {

  return (
    <div>
      <h2>Add Project</h2>

      <form className="admin-form">

        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Category" />

        <textarea placeholder="Description"></textarea>

        <input type="file" />

        <button>Add Project</button>

      </form>
    </div>
  );
}