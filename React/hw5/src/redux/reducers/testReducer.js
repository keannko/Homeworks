const defaultState = {
  counter: 0,
};

export function testReducer(state = defaultState, action) {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
