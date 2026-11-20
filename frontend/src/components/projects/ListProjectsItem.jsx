import { Link } from "react-router-dom";
import { remove } from "../../datasource/api_projects";

function ListProjectsItem({ project, OnRemove }) {
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      remove(id)
        .then((res) => {
          if (res.success) {
            window.alert(res.message);
            OnRemove();
          } else {
            window.alert(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
          window.alert(err.message);
        });
    }
  };

  return (
    <tr>
      <td className="list-title">{project.title}</td>
      <td className="list-date">
        {project.completion
          ? new Date(project.completion).toLocaleDateString(undefined, {
              timeZone: "UTC",
            })
          : ""}
      </td>
      <td>{project.description}</td>
      <td className="list-actions">
        <Link className="list-btn edit" to={"/projects/edit/" + project.id}>
          Edit
        </Link>
        <button
          className="list-btn delete"
          onClick={() => handleRemove(project.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListProjectsItem;
