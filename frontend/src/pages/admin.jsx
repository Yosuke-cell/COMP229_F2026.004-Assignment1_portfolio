import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./admin.css";

const sections = [
  { title: "Projects",   list: "/projects/list",   add: "/projects/add" },
  { title: "Services",   list: "/services/list",   add: "/services/add" },
  { title: "References", list: "/references/list", add: "/references/add" },
  { title: "Users",      list: "/users/list",      add: "/users/add" },
];

function AdminDashboard() {
  return (
    <>
      <Nav />
      <h1>Admin Dashboard</h1>
      <p id="intro">Manage everything stored in the database.</p>

      <div id="admin">
        {sections.map((section) => (
          <div className="box" key={section.title}>
            <h3>{section.title}</h3>
            <div className="admin-links">
              <Link to={section.list} className="admin-button">View list</Link>
              <Link to={section.add} className="admin-button">+ Add new</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminDashboard;