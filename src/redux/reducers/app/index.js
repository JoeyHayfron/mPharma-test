export default function appReducer(state = {}, action) {
  switch (action.type) {
    case "SET_DRUGS_LIST":
      return { ...state };
    default:
      return state;
  }
}
