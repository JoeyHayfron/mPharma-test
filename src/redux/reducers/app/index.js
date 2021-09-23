const initialState = {
  entities: undefined,
  isLoading: false,
  errorMessage: undefined,
  isAdding: false,
  isDeleting: false,
  isEditing: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ENTITIES":
      return { ...state, isLoading: true };
    case "FETCH_ENTITIES_SUCCESS":
      return { ...state, isLoading: false, entities: action.payload };
    case "FETCH_ENTITIES_FAILURE":
      return { ...state, isLoading: false, errorMessage: action.payload };
    case "START_ADDING_ENTITY":
      return { ...state, isAdding: true };
    case "ADD_ENTITY_SUCCESS":
      return { ...state, isAdding: false, entities: action.payload };
    case "ADD_ENTITY_FAILURE":
      return { ...state, isAdding: false, errorMessage: action.payload };
    case "START_DELETING_ENTITY":
      return { ...state, isDeleting: true };
    case "DELETE_ENTITY_SUCCESS":
      return { ...state, isDeleting: false, entities: action.payload };
    case "DELETE_ENTITY_FAILURE":
      return { ...state, isDeleting: false, errorMessage: action.payload };
    case "START_EDITING_ENTITY":
      return { ...state, isEditing: true };
    case "EDIT_ENTITY_SUCCESS":
      return { ...state, isEditing: false, entities: action.payload };
    case "EDIT_ENTITY_FAILURE":
      return { ...state, isEditing: false, errorMessage: action.payload };
    default:
      return state;
  }
}
