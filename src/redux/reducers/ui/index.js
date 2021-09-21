export default function uiReducer(state = {}, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state };
    default:
      return state;
  }
}
