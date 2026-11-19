import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "../../datasource/api_projects";
import './ListProjects.css'

function ListProjects() {

    const [projectList, setprojectList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const LoadProject = () => {
        list().then((res) => {
        if (res.success) {
            setprojectList(res.data || []);
        } else {
            alert(res.message);
        }
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setisLoading(false);
        })
    };

    useEffect(() => {
        LoadProject();

    }, []);


return (
    //   -- Main Content --
        <main className="container">
            <div className="row">
                <h1>Project List</h1>

                <div>
                    <Link to="/project/add" className="btn btn-primary align-self-end" role="button">
                        <i className="fas fa-plus-circle"></i>
                        Add a new Item
                    </Link>
                </div>
                <br />
                <br />
                <div className="table-responsive" >
                    {isLoading && <div>Loading...</div>}
                    {!isLoading && console.log("Project List: ", projectList)}
                    {!isLoading && projectList.length === 0 && <div>No projects found.</div>}
                    {!isLoading && projectList.length > 0 &&
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                {/* -- Header Row-- */}
                                <tr>
                                    <th className="text-center">Title</th>
                                    <th className="text-center">Completion</th>
                                    <th className="text-center">Description</th>
                                    <th className="text-center" colSpan="3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* -- Repeatable Template Row -- */}
                                {projectList.map(project =>
                                    <tr key={project.id}>
                                        <td className="text-center"> {project.title || ''} </td>
                                        <td className="text-center"> {project.completion ? new Date(project.completion).toLocaleDateString() : ''} </td>
                                        <td className="text-center"> {project.description || ''} </td>
                                        <td className="text-center">
                                            <Link className="btn bg-primary btn-primary btn-sm" to={'/project/edit/' + project.id}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                className="btn bg-danger btn-danger btn-sm"
                                                onClick={() => handleRemove(project.id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>}
                </div>
            </div >
        </main >)
}
export default ListProjects
