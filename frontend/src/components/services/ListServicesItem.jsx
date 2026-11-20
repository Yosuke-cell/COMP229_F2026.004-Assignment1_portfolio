import { Link } from "react-router-dom";
import { remove } from "../../datasource/api_services";

function ListServicesItem({ service, OnRemove }) {
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
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
      <td className="list-title">{service.title}</td>
      <td>{service.description}</td>
      <td className="list-actions">
        <Link className="list-btn edit" to={"/services/edit/" + service.id}>
          Edit
        </Link>
        <button
          className="list-btn delete"
          onClick={() => handleRemove(service.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListServicesItem;
