const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const defaultState = {
  cart: [],
};

export function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.includes(action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.id],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload.id),
      };
    default:
      return state;
  }
}
