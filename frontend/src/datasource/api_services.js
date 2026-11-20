let apiURL = import.meta.env.VITE_APP_APIURL;

//list function
const list = async () => {
  //retriview the list of services
  try {
    let res = await fetch(apiURL + "/api/services");

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

//read one service
const read = async (id) => {
  try {
    let response = await fetch(apiURL + "/api/services/" + id);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//add function
const create = async (service) => {
  // Add a new service
  try {
    let response = await fetch(apiURL + "/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(service),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//update function
const update = async (id, service) => {
  try {
    let response = await fetch(apiURL + "/api/services/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(service),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//delete function
const remove = async (id) => {
  try {
    let res = await fetch(apiURL + "/api/services/" + id, {
      method: "DELETE",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { list, read, create, update, remove };
