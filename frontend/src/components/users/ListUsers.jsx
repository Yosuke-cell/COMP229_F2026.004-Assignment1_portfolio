// ListUsers - shows every user from the database in a table
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../../datasource/api_users";
import Nav from "../Nav.jsx";
import "../List.css";
import ListUsersItem from "./ListUsersItem.jsx";

function ListUsers() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Ask the backend for all users and save them in state
  const loadUsers = () => {
    list()
      .then((res) => {
        if (res && res.success) {
          setUserList(res.data || []);
        } else {
          alert(res ? res.message : "Could not load the users.");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Nav />
      <main className="list-page">
        <h1>User List</h1>
        <p id="intro">All the users saved in the database.</p>

        <Link to="/users/add" className="list-add">
          + Add a new user
        </Link>

        {/* Only one of these three is shown at a time */}
        {isLoading && <p className="list-message">Loading...</p>}

        {!isLoading && userList.length === 0 && (
          <p className="list-message">No users found.</p>
        )}

        {!isLoading && userList.length > 0 && (
          <div className="list-table-wrap">
            <table className="list-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th className="list-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <ListUsersItem
                    key={user.id}
                    user={user}
                    OnRemove={loadUsers}
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

export default ListUsers;
