export const getUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/users')
        .then((res) => res.json())
        .then((players) =>
            dispatch({ type: "FETCH_USERS_SUCCESS", payload: players})
            );
    };
};