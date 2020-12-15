function userReducer(state = { all: [] }, action) {
    switch(action.type) {
        case "FETCH_USERS_SUCCESS" :
            return { ...state, users: action.payload };
        default:
            return state;
    }

}

export default userReducer