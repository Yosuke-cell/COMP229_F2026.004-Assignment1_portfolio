// ListServices - shows every service from the database in a table
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../../datasource/api_services";
import Nav from "../Nav.jsx";
import "../List.css";
import ListServicesItem from "./ListServicesItem.jsx";

function ListServices() {
  const [serviceList, setServiceList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Ask the backend for all services and save them in state
  const loadServices = () => {
    list()
      .then((res) => {
        if (res && res.success) {
          setServiceList(res.data || []);
        } else {
          alert(res ? res.message : "Could not load the services.");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <>
      <Nav />
      <main className="list-page">
        <h1>Service List</h1>
        <p id="intro">All the services saved in the database.</p>

        <Link to="/services/add" className="list-add">
          + Add a new service
        </Link>

        {/* Only one of these three is shown at a time */}
        {isLoading && <p className="list-message">Loading...</p>}

        {!isLoading && serviceList.length === 0 && (
          <p className="list-message">No services found.</p>
        )}

        {!isLoading && serviceList.length > 0 && (
          <div className="list-table-wrap">
            <table className="list-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th className="list-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                {serviceList.map((service) => (
                  <ListServicesItem
                    key={service.id}
                    service={service}
                    OnRemove={loadServices}
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

export default ListServices;
