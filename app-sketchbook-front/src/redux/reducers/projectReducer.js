function projectReducer(state = { all: [] }, action) {
  switch (action.type) {
    case "FETCH_PROJECTS_SUCCESS":
      return { ...state, all: action.payload };
    //  default:
    //   return state;

    case "CREATE_PROJECT_SUCCESS":
      return { ...state, all: [...state.all, action.payload] };
    default:
      return state;
  }
}

export default projectReducer;
