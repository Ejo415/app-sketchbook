function userReducer(state = { all: [] }, action) {
    switch(action.type) {
        case "FETCH_USERS_SUCCESS" :
            return { ...state, all: action.payload };
        default:
            return state;
    }

}

export default userReducer