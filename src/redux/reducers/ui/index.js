const initialState = {
  showModal: false,
  modalData: undefined,
};
export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, showModal: true, modalData: action.payload };
    case "HIDE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
}
