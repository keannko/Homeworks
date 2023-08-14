const SET_STATUS = "SET_STATUS";
const SET_SELECT = "SET_SELECT";

const defaultState = {
  isOpened: false,
  selected: "",
};

export function modalWindowReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, isOpened: action.payload.status };
    case SET_SELECT:
      return { ...state, selected: action.payload.selected };
    default:
      return state;
  }
}
