import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { read, update } from "../../datasource/api_services";
import ServiceModel from "../../datasource/serviceModel";
import Nav from "../Nav.jsx";
import "../Form.css";

function EditService() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [service, setService] = useState(new ServiceModel());
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        read(id)
            .then((res) => {
                if (res && res.success && res.data) {
                    setService(res.data);
                } else {
                    setErrorMsg(res ? res.message : "Service not found.");
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setService((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        update(id, service)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate("/services/list");
                } else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    };

    return (
        <>
            <Nav />
            <h1>Edit Service</h1>
            <main className="form-page">
                <p className="form-error">{errorMsg}</p>
                <form onSubmit={handleSubmit} className="form-card">

                    <div className="form-field">
                        <label htmlFor="titleTextField">Title</label>
                        <input
                            id="titleTextField"
                            name="title"
                            className="form-input"
                            placeholder="Enter the title of the service"
                            value={service.title || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="descriptionTextField">Description</label>
                        <textarea
                            id="descriptionTextField"
                            name="description"
                            className="form-input"
                            placeholder="Enter the description of the service"
                            value={service.description || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-buttons">
                        <button className="form-btn primary" type="submit">Submit</button>
                        <button className="form-btn" type="button" onClick={() => navigate(-1)}>Cancel</button>
                    </div>

                </form>
            </main>
        </>
    );
}

export default EditService;
