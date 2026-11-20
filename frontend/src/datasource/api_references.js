let apiURL = import.meta.env.VITE_APP_APIURL;

//list function
const list = async () => {
  //retriview the list of references
  try {
    let res = await fetch(apiURL + "/api/references");

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

//read one reference
const read = async (id) => {
  try {
    let response = await fetch(apiURL + "/api/references/" + id);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//add function
const create = async (reference) => {
  // Add a new reference
  try {
    let response = await fetch(apiURL + "/api/references", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(reference),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//update function
const update = async (id, reference) => {
  try {
    let response = await fetch(apiURL + "/api/references/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(reference),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//delete function
const remove = async (id) => {
  try {
    let res = await fetch(apiURL + "/api/references/" + id, {
      method: "DELETE",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { list, read, create, update, remove };
