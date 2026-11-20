// ListProjects - shows every project from the database in a table
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../../datasource/api_projects";
import Nav from "../Nav.jsx";
import "../List.css";
import ListProjectsItem from "./ListProjectsItem.jsx";

function ListProjects() {
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Ask the backend for all projects and save them in state
  const loadProjects = () => {
    list()
      .then((res) => {
        if (res && res.success) {
          setProjectList(res.data || []);
        } else {
          alert(res ? res.message : "Could not load the projects.");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <>
      <Nav />
      <main className="list-page">
        <h1>Project List</h1>
        <p id="intro">All the projects saved in the database.</p>

        <Link to="/projects/add" className="list-add">
          + Add a new project
        </Link>

        {/* Only one of these three is shown at a time */}
        {isLoading && <p className="list-message">Loading...</p>}

        {!isLoading && projectList.length === 0 && (
          <p className="list-message">No projects found.</p>
        )}

        {!isLoading && projectList.length > 0 && (
          <div className="list-table-wrap">
            <table className="list-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Completion</th>
                  <th>Description</th>
                  <th className="list-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projectList.map((project) => (
                  <ListProjectsItem
                    key={project.id}
                    project={project}
                    OnRemove={loadProjects}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}

export default ListProjects;
