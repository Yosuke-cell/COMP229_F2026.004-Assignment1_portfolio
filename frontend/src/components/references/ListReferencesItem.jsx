import { Link } from "react-router-dom";
import { remove } from "../../datasource/api_references";

function ListReferencesItem({ reference, OnRemove }) {
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this reference?")) {
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
      <td className="list-title">{reference.name}</td>
      <td>{reference.testimonial}</td>
      <td>{reference.position}</td>
      <td>{reference.company}</td>
      <td className="list-actions">
        <Link className="list-btn edit" to={"/references/edit/" + reference.id}>
          Edit
        </Link>
        <button
          className="list-btn delete"
          onClick={() => handleRemove(reference.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListReferencesItem;
