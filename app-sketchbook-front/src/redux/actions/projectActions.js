export const getProjects = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/projects")
      .then((res) => res.json())
      .then((projects) =>
        dispatch({ type: "FETCH_PROJECTS_SUCCESS", payload: projects })
      );
  };
};

export const createProject = (data, user) => {
  return (dispatch) => {
    fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ project: data, user }),
    })
      .then((res) => res.json())
      .then((project) =>
        dispatch({ type: "CREATE_PROJECT_SUCCESS", payload: project })
      );
  };
};
