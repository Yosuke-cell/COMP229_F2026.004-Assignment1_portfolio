let apiURL = import.meta.env.VITE_APP_APIURL;

//list function
const list = async () => {
  //retriview the list of users
  try {
    let res = await fetch(apiURL + "/api/users");

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

//read one user
const read = async (id) => {
  try {
    let response = await fetch(apiURL + "/api/users/" + id);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//add function
const create = async (user) => {
  // Add a new user
  try {
    let response = await fetch(apiURL + "/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//update function
const update = async (id, user) => {
  try {
    let response = await fetch(apiURL + "/api/users/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

//delete function
const remove = async (id) => {
  try {
    let res = await fetch(apiURL + "/api/users/" + id, {
      method: "DELETE",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { list, read, create, update, remove };
