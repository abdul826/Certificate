export default function EditPortfolio() {

  return (
    <div>
      <h2>Edit Project</h2>

      <form className="admin-form">

        <input type="text" defaultValue="App UI" />
        <input type="text" defaultValue="Design" />

        <textarea defaultValue="Modern UI Design"></textarea>

        <input type="file" />

        <button>Update Project</button>

      </form>
    </div>
  );
}
