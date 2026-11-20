import { Link } from "react-router-dom";
import { remove } from "../../datasource/api_users";

function ListUsersItem({ user, OnRemove }) {
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
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
      <td className="list-title">{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.email}</td>
      <td className="list-actions">
        <Link className="list-btn edit" to={"/users/edit/" + user.id}>
          Edit
        </Link>
        <button
          className="list-btn delete"
          onClick={() => handleRemove(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListUsersItem;
