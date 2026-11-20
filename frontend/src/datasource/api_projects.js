let apiURL = import.meta.env.VITE_APP_APIURL;

//list function
const list = async () => {
  //retriview the list of projects
  try {
    let res = await fetch(apiURL + "/api/projects");

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

//read one project
const read = async (id) => {
  try {
    let response = await fetch(apiURL + "/api/projects/" + id);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//add function
const create = async (project) => {
  // Add a new project
  try {
    let response = await fetch(apiURL + "/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(project),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//update function
const update = async (id, project) => {
  try {
    let response = await fetch(apiURL + "/api/projects/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(project),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//delete function
const remove = async (id) => {
  try {
    let res = await fetch(apiURL + "/api/projects/" + id, {
      method: "DELETE",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { list, read, create, update, remove };
