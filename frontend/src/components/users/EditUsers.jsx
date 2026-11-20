import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { read, update } from "../../datasource/api_users";
import UserModel from "../../datasource/userModel";
import Nav from "../Nav.jsx";
import "../Form.css";

function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState(new UserModel());
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        read(id)
            .then((res) => {
                if (res && res.success && res.data) {
                    setUser(res.data);
                } else {
                    setErrorMsg(res ? res.message : "User not found.");
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        update(id, user)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate("/users/list");
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
            <h1>Edit User</h1>
            <main className="form-page">
                <p className="form-error">{errorMsg}</p>
                <form onSubmit={handleSubmit} className="form-card">

                    <div className="form-field">
                        <label htmlFor="firstnameTextField">First Name</label>
                        <input
                            id="firstnameTextField"
                            name="firstname"
                            className="form-input"
                            placeholder="Enter the first name of the user"
                            value={user.firstname || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="lastnameTextField">Last Name</label>
                        <input
                            id="lastnameTextField"
                            name="lastname"
                            className="form-input"
                            placeholder="Enter the last name of the user"
                            value={user.lastname || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="emailTextField">Email</label>
                        <input
                            id="emailTextField"
                            name="email"
                            type="email"
                            placeholder="Enter the email of the user"
                            className="form-input"
                            value={user.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="passwordTextField">Password</label>
                        <input
                            id="passwordTextField"
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter the password of the user"
                            value={user.password || ""}
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

export default EditUser;
