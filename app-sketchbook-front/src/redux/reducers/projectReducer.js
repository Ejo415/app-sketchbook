function projectReducer(state = { all: [] }, action) {
  switch (action.type) {
    case "FETCH_PROJECTS_SUCCESS":
      return { ...state, all: action.payload };

    case "CREATE_PROJECT_SUCCESS":
      return { ...state, all: [...state.all, action.payload] };
    
      
      case 'EDIT_PROJECT_SUCCESS':
    return {
    ...state, all: [...state.all.filter(project => project.id !==action.payload.id), action.payload]
         }

    default:
      return state;

    
  }
}

export default projectReducer;
