export const getUsers = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((users) =>
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: users })
      );
  };
};

export const createUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: data }),
    })
      .then((res) => res.json())
      .then((user) => dispatch({ type: "CREATE_USER_SUCCESS", payload: user }));
  };
};
