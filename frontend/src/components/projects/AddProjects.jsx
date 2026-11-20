import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api_projects";
import ProjectModel from "../../datasource/projectModel";
import Nav from "../Nav.jsx";
import "../Form.css";

function AddProject() {
    const navigate = useNavigate();

    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        create(project)
            .then((res) => {
                if (res.success) {
                    alert(res.message + "- Id: " + res.data.id);
                    navigate("/projects/list");
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
            <h1>Add Project</h1>
            <main className="form-page">
                <p className="form-error">{errorMsg}</p>
                <form onSubmit={handleSubmit} className="form-card">

                    <div className="form-field">
                        <label htmlFor="titleTextField">Title</label>
                        <input
                            id="titleTextField"
                            name="title"
                            className="form-input"
                            placeholder="Enter the title of the project"
                            value={project.title || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="CompletionTextField">Completion</label>
                        <input
                            id="CompletionTextField"
                            name="completion"
                            type="date"
                            className="form-input"
                            value={project.completion ? new Date(project.completion).toISOString().split('T')[0] : ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="descriptionTextField">Description</label>
                        <textarea
                            id="descriptionTextField"
                            name="description"
                            className="form-input"
                            placeholder="Enter the description of the project"
                            value={project.description || ""}
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

export default AddProject;
