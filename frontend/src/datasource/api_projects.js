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

//delete function
const remove = async (id) => {
  try {
    let res = await fetch(apiURL + "/api/projects" + id, {
      method: "DELETE",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { list, remove };
