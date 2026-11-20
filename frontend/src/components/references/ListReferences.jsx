// ListReferences - shows every reference from the database in a table
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../../datasource/api_references";
import Nav from "../Nav.jsx";
import "../List.css";
import ListReferencesItem from "./ListReferencesItem.jsx";

function ListReferences() {
  const [referencesList, setReferencesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Ask the backend for all references and save them in state
  const loadReferences = () => {
    list()
      .then((res) => {
        if (res && res.success) {
          setReferencesList(res.data || []);
        } else {
          alert(res ? res.message : "Could not load the references.");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadReferences();
  }, []);

  return (
    <>
      <Nav />
      <main className="list-page">
        <h1>Reference List</h1>
        <p id="intro">All the references saved in the database.</p>

        <Link to="/references/add" className="list-add">
          + Add a new reference
        </Link>

        {/* Only one of these three is shown at a time */}
        {isLoading && <p className="list-message">Loading...</p>}

        {!isLoading && referencesList.length === 0 && (
          <p className="list-message">No references found.</p>
        )}

        {!isLoading && referencesList.length > 0 && (
          <div className="list-table-wrap">
            <table className="list-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Testimonial</th>
                  <th>Position</th>
                  <th>Company</th>
                  <th className="list-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                {referencesList.map((reference) => (
                  <ListReferencesItem
                    key={reference.id}
                    reference={reference}
                    OnRemove={loadReferences}
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

export default ListReferences;
