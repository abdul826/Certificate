import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">Admin</h2>

      <div className="menu">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/skills">Skills</Link>
        <Link to="/admin/portfolio">Portfolio</Link>
        <Link to="/admin/testimonial">Testimonial</Link>
        <Link to="/admin/services">Services</Link>
        <Link to="/admin/cv">CV</Link>
      </div>

    </div>
  );
}