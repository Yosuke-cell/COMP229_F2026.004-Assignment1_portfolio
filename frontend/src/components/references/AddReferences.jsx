import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api_references";
import ReferenceModel from "../../datasource/referenceModel";
import Nav from "../Nav.jsx";
import "../Form.css";

function AddReference() {
    const navigate = useNavigate();

    const [reference, setReference] = useState(new ReferenceModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReference((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        create(reference)
            .then((res) => {
                if (res.success) {
                    alert(res.message + "- Id: " + res.data.id);
                    navigate("/references/list");
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
            <h1>Add Reference</h1>
            <main className="form-page">
                <p className="form-error">{errorMsg}</p>
                <form onSubmit={handleSubmit} className="form-card">

                    <div className="form-field">
                        <label htmlFor="nameTextField">Name</label>
                        <input
                            id="nameTextField"
                            name="name"
                            className="form-input"
                            placeholder="Enter the name of the reference"
                            value={reference.name || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="testimonialTextField">Testimonial</label>
                        <textarea
                            id="testimonialTextField"
                            name="testimonial"
                            className="form-input"
                            placeholder="Enter the testimonial of the reference"
                            value={reference.testimonial || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="positionTextField">Position</label>
                        <input
                            id="positionTextField"
                            name="position"
                            className="form-input"
                            placeholder="Enter the position of the reference"
                            value={reference.position || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="companyTextField">Company</label>
                        <input
                            id="companyTextField"
                            name="company"
                            className="form-input"
                            placeholder="Enter the company of the reference"
                            value={reference.company || ""}
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

export default AddReference;
